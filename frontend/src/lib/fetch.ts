import {
  API_BASE_URL,
  NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_FRONTEND_URL,
} from "@/constants/env";
import { redirect } from "next/navigation";

const isServerSide = typeof window === "undefined";
async function fetchCsrfToken() {
  await fetch(`${NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });
}

type BaseHttpOptions<HttpResponse = unknown> = {
  method: string;
  body?: Record<string, unknown>;
  query?: Record<string, unknown>;
  headers?: Record<string, string>;
  callbacks?: {
    onSuccess?: (data: HttpResponse | null) => void;
    onError?: (error: Error) => void;
    onAuthError?: () => void;
  };
};

export type HttpOptions = Omit<BaseHttpOptions, "method">;

export async function http<HttpResponse = null>(
  url: string,
  options: BaseHttpOptions<Response>
): Promise<HttpResponse> {
  const { onSuccess, onError, onAuthError } = options.callbacks || {};

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

  const query = getQueryString(options);
  const response = await fetch(endpoint + query, {
    credentials: "include",
    headers: options.headers,
    method: options.method,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    const errorBody = await response.text();

    if (response.status === 401) {
      if (onAuthError) {
        onAuthError();
      } else {
        if (isServerSide) {
          redirect("/login");
        } else {
          location.href = "/login";
        }
      }
    } else {
      // 5xx系のエラーが発生 or 応答がなかった or リクエスト送信前にエラーが発生した場合
      console.error("API Error:", JSON.parse(errorBody));
      if (isServerSide) {
        throw new Error("API Error");
      } else {
        const error = new Error("API Error " + errorBody);
        if (onError !== undefined) {
          onError(error);
        } else {
          handleError();
        }
      }
    }
  } else {
    if (response.status === 204) {
      onSuccess?.(null);
      return null as HttpResponse;
    }

    try {
      // MEMO: responseが存在しない場合, .jsonでエラーが発生するため, try-catchで処理
      // ステータスコードを明示的に204で返すか検討
      const resolvedResponse = await response.json();
      const data = resolvedResponse.data;
      onSuccess?.(data);
      return data;
    } catch (error) {
      console.log("Invalid JSON response", error);
      return null as HttpResponse;
    }
  }

  return null as HttpResponse;
}

async function handleError() {
  const { addToast } = await import("@heroui/react");
  addToast({
    title: "エラーが発生しました",
    description: "エラーが発生しました",
    color: "danger",
  });
}

function getQueryString(options: Pick<HttpOptions, "query">): string {
  const params = Object.entries(options.query || {}).reduce(
    (acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    },
    {} as Record<string, string>
  );

  return params ? `?${new URLSearchParams(params).toString()}` : "";
}
