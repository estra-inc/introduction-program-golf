import Link from "next/link";

export default function Page() {
  return (
    <div className="grid h-screen items-center justify-center text-center">
      <div className="space-y-8">
        <p>お探しのページが見つかりませんでした</p>
        <p>
          お探しのページは削除、変更されたか、一時的に利用できない可能性があります。
        </p>
        <Link className="block hover:underline" href="/golf-courses">
          ゴルフ場検索ページに戻る
        </Link>
      </div>
    </div>
  );
}