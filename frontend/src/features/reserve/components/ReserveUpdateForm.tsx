"use client";

import { addToast } from "@heroui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Button } from "@/components/elements/Button";
import { Select } from "@/components/elements/forms/Select";
import yup from "@/lib/yup";

import updateReserve from "../api/updateReserve";
import { RESERVE_STATUS } from "../constants";
import { Reserve } from "../types";

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
    setValue,
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
            onChange={(e) => {
              if (e.target.value) {
                setValue("statusId", parseInt(e.target.value));
              }
            }}
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
