"use client";

import ReserveListTable from "@/features/reserve/components/ReserveListTable";
import { Reserve } from "@/features/reserve/types";
import { useRouter } from "next/navigation";

type ClientComponentProps = {
  reserves: Pick<
    Reserve,
    | "id"
    | "start_date"
    | "guest_name"
    | "guest_email"
    | "person_count"
    | "status"
    | "golf_course_name"
  >[];
};

export default function ClientComponent({ reserves }: ClientComponentProps) {
  const router = useRouter();

  return (
    <>
      <ReserveListTable
        reserves={reserves}
        onRowClick={(reserve) => {
          router.push(`/reserves/${reserve.id}`);
        }}
      />
    </>
  );
}
