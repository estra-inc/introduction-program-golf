import { http, HttpOptions } from "@/lib/fetch";
import { SearchGolfCourseItem } from "../types/SearchGolfCourseItem";

type Query = {
  area?: number;
  keyword?: string;
  page?: number;
};

type Response = {
  Items: SearchGolfCourseItem[];
  last: number;
};

export const searchGolfCourses = async (
  options: HttpOptions & { query: Query }
) => {
  return await http<Response>("/api/golf-courses", {
    method: "GET",
    ...options,
  });
};
