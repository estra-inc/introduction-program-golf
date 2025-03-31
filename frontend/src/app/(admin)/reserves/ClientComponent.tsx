"use client";

import ReserveListTable from "@/features/reserve/components/ReserveListTable";
import { useRouter } from "next/navigation";

export default function ClientComponent() {
  const router = useRouter();

  return (
    <>
      <ReserveListTable
        className="max-h-[calc(100vh-16rem)]"
        onRowClick={(reserve) => {
          router.push(`/reserves/${reserve.id}`);
        }}
      />
    </>
  );
}
