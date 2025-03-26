"use client";

import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/form";

type LoginFormProps = {
  onSuccess: () => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form
      className="flex flex-col gap-10 w-96 text-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold">ログイン</h1>

      <div className="flex flex-col gap-4">
        <Input label="メールアドレス" variant="bordered" />
        <Input label="パスワード" variant="bordered" />
      </div>

      <Button type="submit">ログイン</Button>
    </form>
  );
}
