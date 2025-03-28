import { http, HttpOptions } from "@/lib/fetch";

export default function fetchMe<T>(options?: Omit<HttpOptions<T>, "method">) {
  return http<T>("/api/me", {
    method: "GET",
    ...options,
  });
}
