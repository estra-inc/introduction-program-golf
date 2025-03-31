import {
  API_BASE_URL,
  NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_FRONTEND_URL,
} from "@/constants/env";
import { redirect } from "next/navigation";

const isServerSide = typeof window === "undefined";

export type HttpOptions = {
  callbacks?: {
    onError?: (error: Error) => void;
    onAuthError?: () => void;
  };
};

export type HttpParams<
  PathParams = Record<string, string>,
  QueryParams = Record<string, unknown>,
  RequestBody = Record<string, unknown>
> = {
  pathParams?: PathParams;
  queryParams?: QueryParams;
  requestBody?: RequestBody;
};

export type HttpDocument = {
  params?: HttpParams;
  options?: HttpOptions;
};

export async function http<T extends HttpDocument, R = null>(
  path: string,
  method: string = "GET",
  params?: T["params"],
  options?: T["options"]
): Promise<R> {
  const { pathParams, queryParams, requestBody } = params ?? {};
  const { onError, onAuthError } = options?.callbacks ?? {};

  const headers: RequestInit["headers"] = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (isServerSide) {
    const nextHeaders = await import("next/headers");
    const nextHeadersInstance = await nextHeaders.headers();
    headers["origin"] = NEXT_PUBLIC_FRONTEND_URL || "";
    headers["cookie"] = nextHeadersInstance.get("cookie") ?? "";
  }

  if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
    await fetchCsrfToken();

    if (isServerSide) {
      const nextHeaders = await import("next/headers");
      const cookies = await nextHeaders.cookies();
      headers["X-XSRF-TOKEN"] = cookies.get("XSRF-TOKEN")?.value ?? "";
    } else {
      headers["X-XSRF-TOKEN"] = decodeURIComponent(
        decodeURIComponent(
          document.cookie
            .split("; ")
            .find((row) => row.startsWith("XSRF-TOKEN="))
            ?.split("=")[1] || ""
        )
      );
    }
  }

  const endpoint = makeRequestUrl(path, pathParams ?? {}, queryParams ?? {});
  const response = await fetch(endpoint, {
    method: method,
    headers,
    body: requestBody ? JSON.stringify(requestBody) : undefined,
    credentials: "include",
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
    try {
      // MEMO: responseが存在しない場合, .jsonでエラーが発生するため, try-catchで処理
      // ステータスコードを明示的に204で返すか検討
      const resolvedResponse = await response.json();
      const data = resolvedResponse.data;
      return data;
    } catch (error) {
      console.log("Invalid JSON response", error);
      return null as R;
    }
  }

  return null as R;
}

/**
 * CSRFトークンを取得する
 */
async function fetchCsrfToken() {
  await fetch(`${NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });
}

/**
 * API実行パスのプレースホルダを実際の値に置換して返却する
 *
 * @template T - HttpDocumentの型
 * @param path - API実行パス
 * @param pathParams - パスパラメータのオブジェクト
 * @param queryParams - クエリパラメータのオブジェクト
 * @returns パラメータ置換後のAPI実行パスの文字列
 */
function makeRequestUrl(
  path: string,
  pathParams: Record<string, string>,
  queryParams: Record<string, unknown>
) {
  const baseUrl = isServerSide
    ? API_BASE_URL || NEXT_PUBLIC_API_BASE_URL
    : NEXT_PUBLIC_API_BASE_URL;

  let endpoint = `${baseUrl}${path}`;

  // パスパラメータが存在する場合, パスパラメータを置換
  if (Object.keys(pathParams ?? {}).length > 0) {
    endpoint = `${baseUrl}${replacePathParams(path, pathParams)}`;
  }

  const query = getQueryString(queryParams);
  return `${endpoint}${query}`;
}

/**
 * API実行パスのプレースホルダを実際の値に置換して返却する
 *
 * @template PathParams - パスパラメータの型
 * @param path - API実行パス
 * @param pathParams - パスパラメータのオブジェクト
 * @returns パラメータ置換後のAPI実行パスの文字列
 */
const replacePathParams = <PathParams extends Record<string, string>>(
  path: string,
  pathParams: PathParams
) => {
  return path.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
    const value = pathParams[key];
    if (value === undefined) {
      throw new Error(`Missing required path parameter: ${key}`);
    }

    return encodeURIComponent(value);
  });
};

async function handleError() {
  const { addToast } = await import("@heroui/react");
  addToast({
    title: "エラーが発生しました",
    description: "エラーが発生しました",
    color: "danger",
  });
}

function getQueryString(options: Record<string, unknown>): string {
  const params = Object.entries(options || {}).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = String(value);
    }
    return acc;
  }, {} as Record<string, string>);

  return params ? `?${new URLSearchParams(params).toString()}` : "";
}
