import { http } from "@/lib/fetch";

export default function fetchMe() {
  return http("/api/me", {
    method: "GET",
  });
}
