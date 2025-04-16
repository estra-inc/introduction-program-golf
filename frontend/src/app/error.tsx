"use client";

import Link from "next/link";
import { useEffect } from "react";

import useDisclosure from "@/hooks/useDisclosure";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  // NOTE: 無条件に表示してしまうと認証エラーによるリダイレクト時に画面が一瞬表示されてしまう状態管理する
  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    console.error(error);
    onOpen();
  }, [error, onOpen]);

  return (
    isOpen && (
      <div className="grid h-screen items-center justify-center text-center">
        <div className="space-y-8">
          <p>お探しのページを表示することができません</p>
          <p>
            お探しのページは何かしらの理由で一時的に利用できない可能性があります。
          </p>
          <p>断続的に発生する場合は、お手数ですがお問い合わせください。</p>
          <Link className="block hover:underline" href="/golf-courses">
            ゴルフ場検索ページに戻る
          </Link>
        </div>
      </div>
    )
  );
}
