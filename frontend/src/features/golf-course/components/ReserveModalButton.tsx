"use client";

import { Button } from "@/Components/elements/Button";
import { Input } from "@/Components/elements/form";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import useDisclosure from "@/hooks/useDisclosure";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "@/lib/yup";

const reserveSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  numberOfPeople: yup.number().required(),
});

type ReserveFormData = yup.InferType<typeof reserveSchema>;

export default function ReserveModalButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReserveFormData>({
    resolver: yupResolver(reserveSchema),
  });

  const onSubmit = (data: ReserveFormData) => {
    // TODO: 予約処理
    // トースト表示処理
  };

  console.log(errors);

  return (
    <>
      <Button onPress={onOpen}>予約する</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader>予約フォーム</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="お名前"
                    {...register("name")}
                    errorMessage={errors.name?.message}
                    isInvalid={!!errors.name}
                  />
                  <Input
                    label="メールアドレス"
                    type="email"
                    {...register("email")}
                    errorMessage={errors.email?.message}
                    isInvalid={!!errors.email}
                  />
                  <Input
                    label="人数"
                    type="number"
                    {...register("numberOfPeople")}
                    errorMessage={errors.numberOfPeople?.message}
                    isInvalid={!!errors.numberOfPeople}
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
