"use client";

import ReserveListTable from "@/features/reserve/components/ReserveListTable";
import { useRouter } from "next/navigation";

export default function ClientComponent() {
  const router = useRouter();

  return (
    <>
      <ReserveListTable
        onRowClick={(reserve) => {
          router.push(`/reserves/${reserve.id}`);
        }}
      />
    </>
  );
}
