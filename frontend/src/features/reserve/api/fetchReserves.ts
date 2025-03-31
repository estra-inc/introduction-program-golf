import type { Reserve as ReserveType } from "@/features/reserve/types";
import { http, HttpDocument } from "@/lib/fetch";

type Reserve = Pick<
  ReserveType,
  | "id"
  | "start_date"
  | "guest_name"
  | "guest_email"
  | "person_count"
  | "status"
  | "golf_course_name"
>;

type FetchReservesDocument = HttpDocument & {
  params: {
    queryParams: {
      page?: number;
      limit?: number;
    };
  };
};

export default async function fetchReserves(
  params?: FetchReservesDocument["params"]
): Promise<Reserve[]> {
  return await http<FetchReservesDocument, Reserve[]>(
    "/api/reserves",
    "GET",
    params
  );
}
