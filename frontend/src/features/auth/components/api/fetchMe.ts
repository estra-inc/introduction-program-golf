import { http, HttpDocument } from "@/lib/fetch";

type FetchMeResponse = {
  name: string;
  email: string;
};

type FetchMeDocument = HttpDocument<FetchMeResponse>;

export default function fetchMe(options?: FetchMeDocument["options"]) {
  return http<FetchMeDocument, FetchMeResponse>("/api/me", "GET", {}, options);
}
