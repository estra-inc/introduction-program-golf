import { http, HttpOptions } from "@/lib/fetch";

export default function fetchMe(options?: HttpOptions) {
  return http<{
    name: string;
    email: string;
  }>("/api/me", {
    method: "GET",
    ...options,
  });
}
