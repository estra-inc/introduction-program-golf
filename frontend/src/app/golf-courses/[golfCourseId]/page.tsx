import MainTemplate from "@/Components/templates/MainTemplate";
import { fetchGolfCourse } from "@/features/golf-course/api/fetchGolfCourse";
import { Image } from "@/Components/elements/Image";
import { Button } from "@/Components/elements/Button";

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
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <Image
              src={golfCourse.layoutUrl}
              alt="ゴルフ場"
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">
                {golfCourse.golfCourseName}
              </h1>
              <h2 className="text-4xl font-bold">{golfCourse.evaluation}</h2>
              <h2 className="text-md">{golfCourse.golfCourseCaption}</h2>
            </div>

            <Button className="mt-auto bg-primary text-white font-bold">
              予約する
            </Button>
          </div>
        </div>
      </MainTemplate>
    </>
  );
}
