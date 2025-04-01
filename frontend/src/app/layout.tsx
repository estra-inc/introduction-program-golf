import "./globals.css";
import { Providers } from "@/providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "基礎研修",
  description: "基礎研修 ゴルフ場予約アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
