import {
  API_BASE_URL,
  NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_FRONTEND_URL,
} from "@/constants/env";

const isServerSide = typeof window === "undefined";
async function fetchCsrfToken() {
  await fetch(`${NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });
}

type HttpOptions = {
  method: string;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
};

export async function http(url: string, options: HttpOptions) {
  const baseUrl = isServerSide
    ? API_BASE_URL || NEXT_PUBLIC_API_BASE_URL
    : NEXT_PUBLIC_API_BASE_URL;
  const endpoint = `${baseUrl}${url}`;

  options.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (isServerSide) {
    const nextHeaders = await import("next/headers");
    const headers = await nextHeaders.headers();
    options.headers = {
      origin: NEXT_PUBLIC_FRONTEND_URL || "",
      cookie: headers.get("cookie") ?? "",
      ...options.headers,
    };
  }

  if (["POST", "PUT", "PATCH", "DELETE"].includes(options.method || "GET")) {
    await fetchCsrfToken();

    if (isServerSide) {
      const nextHeaders = await import("next/headers");
      const cookies = await nextHeaders.cookies();
      options.headers = {
        "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN")?.value ?? "",
        ...options.headers,
      };
    } else {
      options.headers = {
        "X-XSRF-TOKEN": decodeURIComponent(
          document.cookie
            .split("; ")
            .find((row) => row.startsWith("XSRF-TOKEN="))
            ?.split("=")[1] || ""
        ),
        ...options.headers,
      };
    }
  }

  const response = await fetch(endpoint, {
    credentials: "include",
    headers: options.headers,
    method: options.method,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`HTTPエラー: ${response.status} ${errorBody}`);
  }

  return response.json();
}
