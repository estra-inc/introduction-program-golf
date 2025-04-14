"use client";

import { useRouter } from "next/navigation";

import ReserveListTable from "@/features/reserve/components/ReserveListTable";

export default function ClientComponent() {
  const router = useRouter();

  return (
    <ReserveListTable
      className="max-h-[calc(100vh-16rem)]"
      onRowClick={(reserve) => {
        router.push(`/reserves/${reserve.id}`);
      }}
    />
  );
}
