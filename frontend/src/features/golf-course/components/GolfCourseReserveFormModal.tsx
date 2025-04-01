"use client";

import {
  addToast,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Button } from "@/components/elements/Button";
import { Input, DatePicker } from "@/components/elements/forms";
import createReserve from "@/features/reserve/api/createReserve";
import useDisclosure from "@/hooks/useDisclosure";
import dayjs from "@/lib/dayjs";
import yup from "@/lib/yup";

const reserveSchema = yup.object().shape({
  guestName: yup.string().required(),
  guestEmail: yup.string().email().required(),
  personCount: yup.number().required(),
  startDate: yup.string().required(),
  golfCourseName: yup.string().required(),
  golfCourseImageUrl1: yup.string().required(),
  golfCourseImageUrl2: yup.string().required(),
  golfCourseImageUrl3: yup.string().required(),
  golfCourseImageUrl4: yup.string().required(),
  golfCourseImageUrl5: yup.string().required(),
});

type ReserveFormData = yup.InferType<typeof reserveSchema>;

type GolfCourseReserveFormModalProps = {
  golfCourse: {
    golfCourseName: string;
    golfCourseImageUrl1: string;
    golfCourseImageUrl2: string;
    golfCourseImageUrl3: string;
    golfCourseImageUrl4: string;
    golfCourseImageUrl5: string;
  };
  className?: string;
};

export default function GolfCourseReserveFormModal({
  golfCourse,
  className,
}: GolfCourseReserveFormModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ReserveFormData>({
    resolver: yupResolver(reserveSchema),
    defaultValues: {
      startDate: undefined,
      guestName: "",
      guestEmail: "",
      personCount: undefined,
      golfCourseName: golfCourse.golfCourseName,
      golfCourseImageUrl1: golfCourse.golfCourseImageUrl1,
      golfCourseImageUrl2: golfCourse.golfCourseImageUrl2,
      golfCourseImageUrl3: golfCourse.golfCourseImageUrl3,
      golfCourseImageUrl4: golfCourse.golfCourseImageUrl4,
      golfCourseImageUrl5: golfCourse.golfCourseImageUrl5,
    },
  });

  const onSubmit = async (data: ReserveFormData) => {
    await createReserve({
      requestBody: {
        start_date: data.startDate,
        guest_name: data.guestName,
        guest_email: data.guestEmail,
        person_count: data.personCount,
        golf_course_name: data.golfCourseName,
        golf_course_image_url1: data.golfCourseImageUrl1,
        golf_course_image_url2: data.golfCourseImageUrl2,
        golf_course_image_url3: data.golfCourseImageUrl3,
        golf_course_image_url4: data.golfCourseImageUrl4,
        golf_course_image_url5: data.golfCourseImageUrl5,
      },
    });

    addToast({
      title: "予約完了",
      description: "予約が完了しました",
    });
    onClose();
    reset();
  };

  return (
    <>
      <Button onPress={onOpen} className={className}>
        予約する
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader>予約フォーム</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="お名前"
                    {...register("guestName")}
                    errorMessage={errors.guestName?.message}
                    isInvalid={!!errors.guestName}
                  />
                  <Input
                    label="メールアドレス"
                    type="email"
                    {...register("guestEmail")}
                    errorMessage={errors.guestEmail?.message}
                    isInvalid={!!errors.guestEmail}
                  />
                  <Input
                    label="人数"
                    type="number"
                    {...register("personCount")}
                    errorMessage={errors.personCount?.message}
                    isInvalid={!!errors.personCount}
                  />
                  <DatePicker
                    label="予約日"
                    {...register("startDate")}
                    errorMessage={errors.startDate?.message}
                    isInvalid={!!errors.startDate}
                    onChange={(value) => {
                      if (value) {
                        setValue(
                          "startDate",
                          dayjs(
                            `${value.year}-${value.month}-${value.day}`
                          ).format("YYYY-MM-DD")
                        );
                      } else {
                        setValue("startDate", "");
                      }
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose} variant="bordered">
                  キャンセル
                </Button>
                <Button type="submit">予約する</Button>
              </ModalFooter>
            </form>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
