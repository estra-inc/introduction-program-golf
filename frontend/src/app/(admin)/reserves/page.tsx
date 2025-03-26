import MainTemplate from "@/components/templates/MainTemplate";
import ReserveListTable from "@/features/reserve/components/ReserveListTable";
import fetchReserves from "@/features/reserve/api/fetchReserves";

export default async function Page() {
  const reserves = await fetchReserves();

  return (
    <>
      <MainTemplate title="予約一覧" subText="reserve list">
        <ReserveListTable reserves={reserves} />
      </MainTemplate>
    </>
  );
}
