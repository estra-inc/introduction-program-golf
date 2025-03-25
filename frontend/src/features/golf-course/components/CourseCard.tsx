"use client";

import { Card, CardBody, Image } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function CourseCard() {
  const router = useRouter();
  const courseName = "ゴルフ場名";
  const courseDetail =
    "ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細ゴルフ場詳細";

  return (
    <Card isPressable onPress={() => router.push("/golf-courses/1")}>
      <CardBody>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Image
              alt="ゴルフ場"
              src="/images/golf-course.jpg"
              className="object-cover"
              height={200}
              width="100%"
            />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold">{courseName}</div>
              <div className="text-sm text-gray-500">{courseDetail}</div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
