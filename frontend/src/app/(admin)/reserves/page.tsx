import MainTemplate from "@/components/templates/MainTemplate";

import Client from "./Client";

export default async function Page() {
  return (
    <MainTemplate title="予約一覧" subTitle="reserve list">
      <Client />
    </MainTemplate>
  );
}