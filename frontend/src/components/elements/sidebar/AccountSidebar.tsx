import Sidebar from "@/components/elements/sidebar/Sidebar";
import fetchMe from "@/features/auth/components/api/fetchMe";
import { AccountType } from "@/types";

export default async function AccountSidebar() {
  // TODO: ログインしているユーザーのアカウントタイプを取得
  let accountType: AccountType = AccountType.GUEST;
  // const accountType: AccountType = AccountType.GUEST;
  const { data } = await fetchMe();
  if (data) {
    accountType = AccountType.ADMIN;
  }

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
