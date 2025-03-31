"use client";

import { Button } from "@/components/elements/Button";
import { Select } from "@/components/elements/forms";
import { addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "@/lib/yup";
import { RESERVE_STATUS } from "@/constants";
import { Reserve } from "../types";
import updateReserve from "../api/updateReserve";

const reserveSchema = yup.object().shape({
  statusId: yup.number().required(),
});

type ReserveFormData = yup.InferType<typeof reserveSchema>;

type ReserveUpdateFormProps = {
  reserve: Pick<Reserve, "id" | "status">;
};

export default function ReserveUpdateForm({ reserve }: ReserveUpdateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ReserveFormData>({
    resolver: yupResolver(reserveSchema),
    defaultValues: {
      statusId: reserve.status.id,
    },
  });

  const onSubmit = async (data: ReserveFormData) => {
    await updateReserve({
      pathParams: {
        reserveId: reserve.id.toString(),
      },
      requestBody: {
        status_id: data.statusId,
      },
    });

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
            selectedKeys={watch("statusId").toString()}
          />

          <Button className="w-full" size="lg" type="submit">
            更新する
          </Button>
        </div>
      </form>
    </>
  );
}
