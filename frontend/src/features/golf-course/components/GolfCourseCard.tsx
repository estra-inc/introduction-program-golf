import { Card, CardBody } from "@heroui/react";

import { Image } from "@/components/elements/Image";

import { SearchGolfCourseItem } from "../types/SearchGolfCourseItem";

type CourseCardProps = {
  golfCourse: Pick<
    SearchGolfCourseItem,
    | "golfCourseId"
    | "golfCourseImageUrl"
    | "golfCourseName"
    | "golfCourseAbbr"
    | "golfCourseCaption"
  >;
};

export default function GolfCourseCard({ golfCourse }: CourseCardProps) {
  return (
    <Card isPressable className="w-full">
      <CardBody>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Image
              alt="ゴルフ場"
              src={golfCourse.golfCourseImageUrl}
              className="object-cover"
              height={200}
              width="100%"
            />
          </div>

          <div className="col-span-2">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold">
                {golfCourse.golfCourseName}
              </div>
              <div className="text-sm text-gray-500">
                {golfCourse.golfCourseAbbr}
              </div>
              <div className="text-sm line-clamp-6">
                {golfCourse.golfCourseCaption}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}