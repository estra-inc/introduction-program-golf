import MainTemplate from "@/components/templates/MainTemplate";
import { searchGolfCourses } from "@/features/golf-course/api/searchGolfCourses";
import ClientComponent from "./ClientComponent";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { area, keyword, page } = await searchParams;
  const areaString = typeof area === "string" ? area : undefined;
  const keywordString = typeof keyword === "string" ? keyword : undefined;
  const pageString = typeof page === "string" ? page : "1";

  const golfCourses = await searchGolfCourses({
    area: areaString,
    keyword: keywordString,
    page: pageString,
  });

  return (
    <>
      <MainTemplate title="ゴルフ場 検索" subText="search golf courses">
        <ClientComponent
          golfCourses={golfCourses.Items}
          query={{
            area: areaString ? Number(areaString) : undefined,
            keyword: keywordString ?? "",
            page: pageString ? Number(pageString) : 1,
          }}
          lastPage={golfCourses.last}
        />
      </MainTemplate>
    </>
  );
}
