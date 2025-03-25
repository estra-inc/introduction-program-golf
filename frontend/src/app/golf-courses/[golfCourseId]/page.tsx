import MainTemplate from "@/Components/templates/MainTemplate";
import ClientComponent from "./ClientComponent";
import { fetchGolfCourse } from "@/features/golf-course/api/fetchGolfCourse";

type PageProps = {
  params: {
    golfCourseId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { golfCourseId } = params;
  const golfCourse = await fetchGolfCourse(Number(golfCourseId));

  return (
    <>
      <MainTemplate title="ゴルフ場 詳細" subText="golf course detail">
        <ClientComponent golfCourse={golfCourse} />
      </MainTemplate>
    </>
  );
}
