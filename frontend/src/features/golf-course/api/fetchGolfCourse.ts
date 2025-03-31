import { http, HttpDocument } from "@/lib/fetch";
import { GolfCourse } from "../types/GolfCourse";

type FetchGolfCourseDocument = HttpDocument<GolfCourse>;

export const fetchGolfCourse = async (
  golfCourseId: number
): Promise<GolfCourse> => {
  return await http<FetchGolfCourseDocument, GolfCourse>(
    `/api/golf-courses/${golfCourseId}`,
    "GET"
  );
};
