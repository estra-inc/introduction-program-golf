"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/elements/Button";
import { Select } from "@/components/elements/forms";
import { Input } from "@/components/elements/forms";
import { Pagination } from "@/components/elements/Pagination";
import GolfCourseCard from "@/features/golf-course/components/GolfCourseCard";
import { AREA_OPTIONS } from "@/features/golf-course/constants/area";
import { SearchGolfCourseItem } from "@/features/golf-course/types/SearchGolfCourseItem";
import yup from "@/lib/yup";

const searchGolfCourseSchema = yup.object().shape({
  area: yup.number().nullable(),
  keyword: yup.string().nullable(),
  page: yup.number().nullable(),
});

type Props = {
  query: {
    area?: number;
    keyword?: string;
    page?: number;
  };
  golfCourses: SearchGolfCourseItem[];
  lastPage: number;
};

type SearchGolfCourseFormData = yup.InferType<typeof searchGolfCourseSchema>;

export default function Client({ golfCourses, query, lastPage }: Props) {
  const router = useRouter();

  const { register, handleSubmit, setValue, getValues, trigger } =
    useForm<SearchGolfCourseFormData>({
      resolver: yupResolver(searchGolfCourseSchema),
      defaultValues: {
        area: query.area ?? null,
        keyword: query.keyword ?? null,
        page: query.page ?? null,
      },
    });

  const onSubmit = (data: SearchGolfCourseFormData) => {
    const params: { [key: string]: string } = {};
    if (data.area) {
      params.area = data.area.toString();
    }
    if (data.keyword) {
      params.keyword = data.keyword;
    }
    if (data.page) {
      params.page = data.page.toString();
    }

    const queryParams = new URLSearchParams(params);
    router.push(`/golf-courses?${queryParams.toString()}`);
    router.refresh();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4">
          <Select options={AREA_OPTIONS} label="エリア" {...register("area")} />
          <Input label="キーワード" {...register("keyword")} />
          <Button type="submit" size="lg">
            検索
          </Button>
        </div>
      </form>

      <div className="flex flex-col gap-4">
        {golfCourses.map((golfCourse) => (
          <Link
            key={golfCourse.golfCourseId}
            href={`golf-courses/${golfCourse.golfCourseId}`}
          >
            <GolfCourseCard golfCourse={golfCourse} />
          </Link>
        ))}
      </div>

      <Pagination
        className="mx-auto"
        initialPage={query.page ?? 1}
        total={lastPage ?? 1}
        onChange={async (page) => {
          setValue("page", page);
          if (!(await trigger())) return;
          const values = getValues();
          onSubmit({
            area: values.area,
            keyword: values.keyword,
            page: page,
          });
        }}
      />
    </>
  );
}
