import { Input, Select } from "@/Components/elements/form";
import MainTemplate from "@/Components/templates/MainTemplate";
import CourseCard from "@/features/golf-course/components/CourseCard";

export default function Page() {
  const options = [
    { label: "テスト1", value: "test1" },
    { label: "テスト2", value: "test2" },
    { label: "テスト3", value: "test3" },
  ];

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <MainTemplate title="ゴルフ場 検索" subText="search golf courses">
        <div className="flex gap-4">
          <Select options={options} label="エリア" />
          <Input label="キーワード" />
        </div>
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <CourseCard key={card} />
          ))}
        </div>
      </MainTemplate>
    </>
  );
}
