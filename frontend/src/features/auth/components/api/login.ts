import { http } from "@/lib/fetch";

export default function login(email: string, password: string) {
  return http("/api/login", {
    method: "POST",
    body: { email, password },
  });
}
