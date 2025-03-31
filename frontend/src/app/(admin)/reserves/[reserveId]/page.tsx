import MainTemplate from "@/components/templates/MainTemplate";
import { Image } from "@/components/elements/Image";
import fetchReserve from "@/features/reserve/api/fetchReserve";
import ReserveUpdateForm from "@/features/reserve/components/ReserveUpdateForm";

export default async function Page({
  params,
}: {
  params: { reserveId: string };
}) {
  const reserveId = params.reserveId;

  const reserve = await fetchReserve(Number(reserveId));

  const sourceImages = [
    reserve.golfCourseImageUrl1,
    reserve.golfCourseImageUrl2,
    reserve.golfCourseImageUrl3,
    reserve.golfCourseImageUrl4,
    reserve.golfCourseImageUrl5,
  ];

  return (
    <MainTemplate title="予約詳細" subText="reserve detail">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <Image
            src={reserve.golfCourseImageUrl1}
            alt="ゴルフ場"
            className="object-cover"
            width="100%"
            height="auto"
          />
        </div>

        <div className="flex flex-col col-span-1 gap-10">
          <div className="flex flex-col gap-10 h-full">
            <h1 className="text-3xl font-bold">{reserve.golfCourseName}</h1>

            <div>
              <h2 className="text-2xl font-bold">
                予約者名: {reserve.guestName}
              </h2>
              <h2 className="text-2xl font-bold">
                人数: {reserve.personCount}
              </h2>
              <h2 className="text-2xl font-bold">
                予約日: {reserve.startDate}
              </h2>
              <h2 className="text-2xl font-bold">
                予約者メールアドレス: {reserve.guestEmail}
              </h2>
            </div>

            <div className="mt-auto">
              <ReserveUpdateForm reserve={reserve} />
            </div>
          </div>
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
  );
}
