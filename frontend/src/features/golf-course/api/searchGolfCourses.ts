import { http, HttpDocument } from "@/lib/fetch";
import { SearchGolfCourseItem } from "../types/SearchGolfCourseItem";

type QueryParams = {
  areaCode?: number;
  keyword?: string;
  page?: number;
};

type ResponseBody = {
  Items: SearchGolfCourseItem[];
  pageCount: number;
};

type SearchGolfCoursesHttpDocument = {
  params: {
    queryParams: QueryParams;
  };
} & HttpDocument;

export const searchGolfCourses = async (
  params?: SearchGolfCoursesHttpDocument["params"],
  options?: SearchGolfCoursesHttpDocument["options"]
) => {
  return await http<SearchGolfCoursesHttpDocument, ResponseBody>(
    "/api/golf-courses",
    "GET",
    params,
    options
  );
};
