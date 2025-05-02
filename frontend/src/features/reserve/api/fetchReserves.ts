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

type FetchReservesDocument = HttpDocument<
  undefined,
  {
    page?: number;
    limit?: number;
  },
  undefined,
  {
    data: Reserve[];
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      per_page: number;
      to: number;
      total: number;
    };
  }
>;

export default async function fetchReserves(
  params?: FetchReservesDocument["params"]
) {
  return await http<FetchReservesDocument>("/api/reserves", "GET", params);
}