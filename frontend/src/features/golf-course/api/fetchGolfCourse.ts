import { http, HttpDocument } from "@/lib/fetch";

import { GolfCourse } from "../types/GolfCourse";

type FetchGolfCourseDocument = HttpDocument<
  {
    golfCourseId: string;
  },
  undefined,
  undefined,
  { data: GolfCourse }
>;

export const fetchGolfCourse = async (
  params?: FetchGolfCourseDocument["params"]
) => {
  return await http<FetchGolfCourseDocument>(
    "/api/golf-courses/:golfCourseId",
    "GET",
    params
  );
};
