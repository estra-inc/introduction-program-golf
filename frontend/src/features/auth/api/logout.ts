import { http } from "@/lib/fetch";

export default function logout() {
  return http("/api/logout", "POST");
}