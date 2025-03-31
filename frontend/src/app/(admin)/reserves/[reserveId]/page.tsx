import MainTemplate from "@/components/templates/MainTemplate";
import { Image } from "@/components/elements/Image";
import fetchReserve from "@/features/reserve/api/fetchReserve";
import ReserveUpdateForm from "@/features/reserve/components/ReserveUpdateForm";
import dayjs from "@/lib/dayjs";

export default async function Page({
  params,
}: {
  params: { reserveId: string };
}) {
  const { reserveId } = await params;

  const reserve = await fetchReserve({
    pathParams: {
      reserveId,
    },
  });

  const sourceImages = [
    reserve.golf_course_image_url1,
    reserve.golf_course_image_url2,
    reserve.golf_course_image_url3,
    reserve.golf_course_image_url4,
    reserve.golf_course_image_url5,
  ];

  const columns = [
    {
      label: "予約者名",
      value: reserve.guest_name,
    },
    {
      label: "人数",
      value: reserve.person_count,
    },
    {
      label: "予約日",
      value: dayjs(reserve.start_date).format("YYYY年MM月DD日"),
    },
    {
      label: "メールアドレス",
      value: reserve.guest_email,
    },
  ];

  return (
    <MainTemplate title="予約詳細" subText="reserve detail">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <Image
            src={reserve.golf_course_image_url1}
            alt="ゴルフ場"
            className="object-cover"
            width="100%"
            height="auto"
          />
        </div>

        <div className="flex flex-col col-span-1 gap-10">
          <div className="flex flex-col gap-10 h-full">
            <h1 className="text-3xl font-bold">{reserve.golf_course_name}</h1>

            <div className="flex flex-col gap-2">
              {columns.map((column) => (
                <div
                  className="grid grid-cols-3 gap-2 text-lg"
                  key={column.label}
                >
                  <p className="col-span-1 font-bold">{column.label}</p>
                  <p className="col-span-2">{column.value}</p>
                </div>
              ))}
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
