import type { Reserve } from "@/features/reserve/types";

export default async function fetchReserves(): Promise<Reserve[]> {
  return [
    {
      id: 1,
      startDate: "2021-01-01",
      name: "John Doe",
      email: "john.doe@example.com",
      personCount: 4,
      status: {
        id: 1,
        name: "Active",
      },
      golfCourseImageUrl1: "https://via.placeholder.com/150",
      golfCourseImageUrl2: "https://via.placeholder.com/150",
      golfCourseImageUrl3: "https://via.placeholder.com/150",
      golfCourseImageUrl4: "https://via.placeholder.com/150",
      golfCourseImageUrl5: "https://via.placeholder.com/150",
      golfCourseName: "Golf Course Name",
      evaluation: "5.0",
      golfCourseCaption: "Golf Course Caption",
    },
    {
      id: 2,
      startDate: "2021-01-01",
      name: "John Doe",
      email: "john.doe@example.com",
      personCount: 4,
      status: {
        id: 1,
        name: "Active",
      },
      golfCourseImageUrl1: "https://via.placeholder.com/150",
      golfCourseImageUrl2: "https://via.placeholder.com/150",
      golfCourseImageUrl3: "https://via.placeholder.com/150",
      golfCourseImageUrl4: "https://via.placeholder.com/150",
      golfCourseImageUrl5: "https://via.placeholder.com/150",
      golfCourseName: "Golf Course Name",
      evaluation: "5.0",
      golfCourseCaption: "Golf Course Caption",
    },
  ];
}
