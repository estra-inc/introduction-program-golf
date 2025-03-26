"use client";

import MainTemplate from "@/components/templates/MainTemplate";
import ReserveListTable from "@/features/reserve/components/ReserveListTable";
import { Reserve } from "@/features/reserve/types";
import { useRouter } from "next/navigation";

type ClientComponentProps = {
  reserves: Reserve[];
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
