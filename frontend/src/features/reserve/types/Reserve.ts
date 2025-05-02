export type Reserve = {
  id: string;
  start_date: string;
  guest_name: string;
  guest_email: string;
  person_count: number;
  status: {
    id: number;
    name: string;
  };
  golf_course_image_url1: string;
  golf_course_image_url2: string;
  golf_course_image_url3: string;
  golf_course_image_url4: string;
  golf_course_image_url5: string;
  golf_course_name: string;
};