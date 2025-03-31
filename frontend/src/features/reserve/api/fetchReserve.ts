import type { Reserve } from "@/features/reserve/types";
import { http, HttpDocument } from "@/lib/fetch";

type FetchReserveDocument = HttpDocument<Reserve> & {
  params: {
    reserveId: number;
  };
};

export default async function fetchReserve(
  reserveId: number
): Promise<Reserve> {
  return await http<FetchReserveDocument, Reserve>(
    `/api/reserves/${reserveId}`,
    "GET"
  );
}
