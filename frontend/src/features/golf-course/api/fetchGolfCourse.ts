import { http, HttpDocument } from "@/lib/fetch";
import { GolfCourse } from "../types/GolfCourse";

type FetchGolfCourseDocument = HttpDocument & {
  params: {
    pathParams: {
      golfCourseId: string;
    };
  };
};

export const fetchGolfCourse = async (
  params?: FetchGolfCourseDocument["params"]
): Promise<GolfCourse> => {
  return await http<FetchGolfCourseDocument, GolfCourse>(
    "/api/golf-courses/:golfCourseId",
    "GET",
    params
  );
};
