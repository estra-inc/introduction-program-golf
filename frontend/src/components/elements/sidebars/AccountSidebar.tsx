import Sidebar from "@/components/elements/sidebars/Sidebar";
import fetchMe from "@/features/auth/components/api/fetchMe";
import { AccountType } from "@/types";

export default async function AccountSidebar() {
  let accountType: AccountType = AccountType.GUEST;
  const { data } = await fetchMe({
    callbacks: {
      onAuthError: () => {},
    },
  });

  if (data) {
    accountType = AccountType.ADMIN;
  }

  const guest = [{ label: "ゴルフ場一覧", href: "/golf-courses" }];

  const admin = [
    { label: "ゴルフ場一覧", href: "/golf-courses" },
    { label: "予約一覧", href: "/reserves" },
  ];

  let links = [];
  switch (accountType) {
    case AccountType.ADMIN:
      links = admin;
      break;
    default:
      links = guest;
      break;
  }

  return (
    <Sidebar links={links} canLogout={accountType === AccountType.ADMIN} />
  );
}
