import MainTemplate from "@/components/templates/MainTemplate";
import { searchGolfCourses } from "@/features/golf-course/api/searchGolfCourses";
import ClientComponent from "./ClientComponent";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { area, keyword, page } = await searchParams;

  const query = {
    page: typeof page === "string" ? Number(page) : 1,
    areaCode: typeof area === "string" ? Number(area) : undefined,
    keyword: typeof keyword === "string" ? keyword : undefined,
  };

  if (!query.areaCode && !query.keyword) {
    query.areaCode = 13;
  }

  const data = await searchGolfCourses({ queryParams: query });

  return (
    <>
      <MainTemplate title="ゴルフ場 検索" subText="search golf courses">
        <ClientComponent
          golfCourses={data.Items}
          query={query}
          lastPage={data.pageCount}
        />
      </MainTemplate>
    </>
  );
}
