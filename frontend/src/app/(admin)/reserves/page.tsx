import MainTemplate from "@/components/templates/MainTemplate";
import fetchReserves from "@/features/reserve/api/fetchReserves";
import ClientComponent from "./ClientComponent";

export default async function Page() {
  const reserves = await fetchReserves({
    queryParams: {
      page: 1,
    },
  });

  return (
    <>
      <MainTemplate title="予約一覧" subText="reserve list">
        <ClientComponent reserves={reserves} />
      </MainTemplate>
    </>
  );
}
