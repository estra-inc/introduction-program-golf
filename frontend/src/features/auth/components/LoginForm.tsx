"use client";

import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/forms";
import { useForm } from "react-hook-form";
import yup from "@/lib/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import login from "./api/login";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("メールアドレス形式で入力してください。")
    .required("メールアドレスは必須です。"),
  password: yup.string().required("パスワードは必須です。"),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

type LoginFormProps = {
  onSuccess: () => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login({
      requestBody: {
        email: data.email,
        password: data.password,
      },
    }).then(() => onSuccess());
  };

  return (
    <form
      className="flex flex-col gap-10 w-96 text-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-4xl font-bold">ログイン</h1>

      <div className="flex flex-col gap-4">
        <Input
          label="メールアドレス"
          variant="bordered"
          {...register("email")}
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email?.message}
        />
        <Input
          label="パスワード"
          variant="bordered"
          {...register("password")}
          errorMessage={errors.password?.message}
          isInvalid={!!errors.password?.message}
        />
      </div>

      <Button type="submit">ログイン</Button>
    </form>
  );
}
