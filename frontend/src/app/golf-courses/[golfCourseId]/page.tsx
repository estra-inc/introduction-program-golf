import MainTemplate from "@/Components/templates/MainTemplate";
import { fetchGolfCourse } from "@/features/golf-course/api/fetchGolfCourse";
import { Image } from "@/Components/elements/Image";
import ReserveModalButton from "@/features/golf-course/components/ReserveModalButton";

type PageProps = {
  params: {
    golfCourseId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { golfCourseId } = params;
  const golfCourse = await fetchGolfCourse(Number(golfCourseId));

  const sourceImages = [
    golfCourse.golfCourseImageUrl1,
    golfCourse.golfCourseImageUrl2,
    golfCourse.golfCourseImageUrl3,
    golfCourse.golfCourseImageUrl4,
    golfCourse.golfCourseImageUrl5,
  ];

  return (
    <>
      <MainTemplate title="ゴルフ場 詳細" subText="golf course detail">
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1">
            <Image
              src={golfCourse.golfCourseImageUrl1}
              alt="ゴルフ場"
              className="object-cover"
              width="100%"
              height="auto"
            />
          </div>

          <div className="flex flex-col col-span-1 gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">
                {golfCourse.golfCourseName}
              </h1>
              <h2 className="text-4xl font-bold">{golfCourse.evaluation}</h2>
              <h2 className="text-md">{golfCourse.golfCourseCaption}</h2>
            </div>

            <ReserveModalButton />
          </div>
        </div>

        {/* ゴルフ場画像リスト */}
        <h2 className="text-2xl font-bold">ゴルフ場画像</h2>
        <div className="flex gap-10 overflow-x-auto">
          {sourceImages.map((image, index) => (
            <Image
              key={index}
              className="object-cover"
              src={image}
              alt="ゴルフ場"
              width={500}
              height="100%"
            />
          ))}
        </div>
      </MainTemplate>
    </>
  );
}
