import { http, HttpDocument } from "@/lib/fetch";

type UpdateReserveDocument = HttpDocument<
  {
    reserveId: string;
  },
  undefined,
  {
    status_id: number;
  },
  undefined
>;

export default async function updateReserve(
  params?: UpdateReserveDocument["params"]
): Promise<void> {
  await http<UpdateReserveDocument>("/api/reserves/:reserveId", "PUT", params);
}