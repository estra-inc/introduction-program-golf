import type { Reserve } from "@/features/reserve/types";
import { http, HttpDocument } from "@/lib/fetch";

type FetchReserveDocument = HttpDocument<
  {
    reserveId: string;
  },
  undefined,
  undefined,
  { data: Reserve }
>;

export default async function fetchReserve(
  params?: FetchReserveDocument["params"]
) {
  return await http<FetchReserveDocument>(
    "/api/reserves/:reserveId",
    "GET",
    params
  );
}
