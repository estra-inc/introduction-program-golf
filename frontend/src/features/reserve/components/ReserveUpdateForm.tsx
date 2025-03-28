"use client";

import { Button } from "@/components/elements/Button";
import { Select } from "@/components/elements/forms";
import { addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "@/lib/yup";
import { RESERVE_STATUS } from "@/constants";
import { Reserve } from "../types";

const reserveSchema = yup.object().shape({
  statusId: yup.number().required(),
});

type ReserveFormData = yup.InferType<typeof reserveSchema>;

type ReserveUpdateFormProps = {
  reserve: Reserve;
};

export default function ReserveUpdateForm({ reserve }: ReserveUpdateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReserveFormData>({
    resolver: yupResolver(reserveSchema),
  });

  const onSubmit = (data: ReserveFormData) => {
    // TODO: 更新処理
    console.log(data);

    addToast({
      title: "更新完了",
      description: "更新が完了しました",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Select
            label="ステータス"
            {...register("statusId")}
            errorMessage={errors.statusId?.message}
            isInvalid={!!errors.statusId}
            options={RESERVE_STATUS}
            selectedKeys={reserve.status.id.toString()}
          />

          <Button className="w-full" size="lg" type="submit">
            更新する
          </Button>
        </div>
      </form>
    </>
  );
}
