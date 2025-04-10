import MainTemplate from "@/components/templates/MainTemplate";

import ClientComponent from "./ClientComponent";

export default async function Page() {
  return (
    <>
      <MainTemplate title="予約一覧" subTitle="reserve list">
        <ClientComponent />
      </MainTemplate>
    </>
  );
}
