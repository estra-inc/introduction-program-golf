import { http, HttpDocument } from "@/lib/fetch";

type CreateReserveDocument = HttpDocument & {
  params: {
    requestBody: {
      start_date: string;
      guest_name: string;
      guest_email: string;
      person_count: number;
      golf_course_name: string;
      golf_course_image_url1: string;
      golf_course_image_url2: string;
      golf_course_image_url3: string;
      golf_course_image_url4: string;
      golf_course_image_url5: string;
    };
  };
};

export default async function createReserve(
  params?: CreateReserveDocument["params"]
): Promise<void> {
  await http<CreateReserveDocument>("/api/reserves", "POST", params);
}
