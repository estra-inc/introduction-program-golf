"use client";

import { type ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider locale="ja">
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
