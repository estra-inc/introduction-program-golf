
export type SearchGolfCourseItem = {
  golfCourseId: number;
  golfCourseName: string;
  golfCourseAbbr: string;
  golfCourseNameKana: string;
  golfCourseCaption: string;
  golfCourseImageUrl: string | "";
  golfCourseDetailUrl: string;
  address: string;
  latitude: number;
  longitude: number;
  highway: string;
  reserveCalUrl: string;
  ratingUrl: string;
  evaluation: number;
};