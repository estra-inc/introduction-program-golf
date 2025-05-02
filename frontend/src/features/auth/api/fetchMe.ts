import { http, HttpDocument } from "@/lib/fetch";

type FetchMeDocument = HttpDocument<
  undefined,
  undefined,
  undefined,
  {
    data: {
      name: string;
      email: string;
    };
  }
>;

export default function fetchMe(options?: FetchMeDocument["options"]) {
  return http<FetchMeDocument>("/api/me", "GET", {}, options);
}