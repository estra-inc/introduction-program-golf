export type Reserve = {
  id: number;
  startDate: string;
  guestName: string;
  guestEmail: string;
  personCount: number;
  status: {
    id: number;
    name: string;
  };
  golfCourseImageUrl1: string;
  golfCourseImageUrl2: string;
  golfCourseImageUrl3: string;
  golfCourseImageUrl4: string;
  golfCourseImageUrl5: string;
  golfCourseName: string;
  evaluation: string;
  golfCourseCaption: string;
};
