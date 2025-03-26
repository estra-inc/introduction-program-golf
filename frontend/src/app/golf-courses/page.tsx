import { Input, Select } from "@/components/elements/form";
import { Pagination } from "@/components/elements/Pagination";
import MainTemplate from "@/components/templates/MainTemplate";
import { searchGolfCourses } from "@/features/golf-course/api/searchGolfCourses";
import CourseCard from "@/features/golf-course/components/GolfCourseCard";

export default async function Page() {
  const options = [
    { label: "テスト1", value: "test1" },
    { label: "テスト2", value: "test2" },
    { label: "テスト3", value: "test3" },
  ];

  const golfCourses = await searchGolfCourses();

  return (
    <>
      <MainTemplate title="ゴルフ場 検索" subText="search golf courses">
        <form className="flex gap-4">
          <Select options={options} label="エリア" />
          <Input label="キーワード" />
        </form>

        <div className="flex flex-col gap-4">
          {golfCourses.Items.map((golfCourse) => (
            <CourseCard key={golfCourse.golfCourseId} golfCourse={golfCourse} />
          ))}
        </div>

        <Pagination
          initialPage={1}
          total={golfCourses.last}
          className="mx-auto"
        />
      </MainTemplate>
    </>
  );
}
