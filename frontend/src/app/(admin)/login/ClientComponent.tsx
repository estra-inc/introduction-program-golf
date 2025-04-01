"use client";

import { useRouter } from "next/navigation";

import LoginForm from "@/features/auth/components/LoginForm";


export default function ClientComponent() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm onSuccess={() => router.push("/reserves")} />
    </div>
  );
}
