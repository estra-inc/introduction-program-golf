import { http, HttpDocument } from "@/lib/fetch";

import { SearchGolfCourseItem } from "../types/SearchGolfCourseItem";

type SearchGolfCoursesHttpDocument = HttpDocument<
  undefined,
  {
    areaCode?: number;
    keyword?: string;
    page?: number;
  },
  undefined,
  {
    data: {
      Items: SearchGolfCourseItem[];
      pageCount: number;
    };
  }
>;

export const searchGolfCourses = async (
  params?: SearchGolfCoursesHttpDocument["params"],
  options?: SearchGolfCoursesHttpDocument["options"]
) => {
  return await http<SearchGolfCoursesHttpDocument>(
    "/api/golf-courses",
    "GET",
    params,
    options
  );
};
