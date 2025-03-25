"use client";

import { forwardRef, ComponentPropsWithoutRef } from "react";
import { Input as HInput } from "@heroui/react";

export type InputProps = {
  error?: string;
  label?: string;
  helperText?: string;
} & ComponentPropsWithoutRef<typeof HInput>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <HInput {...props} ref={ref} aria-invalid={error ? "true" : "false"} />
    );
  }
);

Input.displayName = "Input";

export default Input;
