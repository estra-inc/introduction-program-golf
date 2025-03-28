import { http, HttpDocument } from "@/lib/fetch";

type LoginHttpDocument = {
  params: {
    requestBody: { email: string; password: string };
  };
} & HttpDocument;

export default function login(params: LoginHttpDocument["params"]) {
  return http<LoginHttpDocument>("/api/login", "POST", params);
}
