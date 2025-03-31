import { http, HttpDocument } from "@/lib/fetch";

type UpdateReserveDocument = HttpDocument & {
  params: {
    pathParams: {
      reserveId: string;
    };
    requestBody: {
      status_id: number;
    };
  };
};

export default async function updateReserve(
  params?: UpdateReserveDocument["params"]
): Promise<void> {
  await http<UpdateReserveDocument>("/api/reserves/:reserveId", "PUT", params);
}
