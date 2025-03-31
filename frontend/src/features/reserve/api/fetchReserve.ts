import type { Reserve } from "@/features/reserve/types";
import { http, HttpDocument } from "@/lib/fetch";

type FetchReserveDocument = HttpDocument & {
  params: {
    pathParams: {
      reserveId: string;
    };
  };
};

export default async function fetchReserve(
  params?: FetchReserveDocument["params"]
): Promise<Reserve> {
  return await http<FetchReserveDocument, Reserve>(
    "/api/reserves/:reserveId",
    "GET",
    params
  );
}
