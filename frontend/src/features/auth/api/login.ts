import { http, HttpDocument } from "@/lib/fetch";

type LoginHttpDocument = HttpDocument<
  undefined,
  undefined,
  {
    email: string;
    password: string;
  },
  undefined
>;

export default function login(params: LoginHttpDocument["params"]) {
  return http<LoginHttpDocument>("/api/login", "POST", params);
}