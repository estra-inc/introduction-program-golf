import Sidebar from "@/components/elements/sidebar/Sidebar";
import { AccountType } from "@/types";

export default function AccountSidebar() {
  // TODO: ログインしているユーザーのアカウントタイプを取得
  const accountType: AccountType = AccountType.ADMIN;
  // const accountType: AccountType = AccountType.GUEST;

  const guest = [
    { label: "ゴルフ場一覧", href: "/golf-courses" },
    { label: "ログアウト", href: "/logout" },
  ];

  const admin = [
    { label: "ゴルフ場一覧", href: "/golf-courses" },
    { label: "予約一覧", href: "/reserves" },
    { label: "ログアウト", href: "/logout" },
  ];

  let links = [];
  switch (accountType) {
    case "admin":
      links = admin;
      break;
    default:
      links = guest;
      break;
  }

  return <Sidebar links={links} />;
}
