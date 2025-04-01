"use client";

import { Button as HButton } from "@heroui/react";
import { useMemo } from "react";

import type { ButtonProps as HButtonProps } from "@heroui/react";

type ButtonProps = {
  children: React.ReactNode;
} & HButtonProps;

export function Button({ children, ...props }: ButtonProps) {
  const style = useMemo(() => {
    switch (props.variant) {
      case "bordered":
        return "";
      default:
        return "bg-primary text-white font-bold";
    }
  }, [props.variant]);

  return (
    <HButton {...props} className={`${style} ${props.className}`}>
      {children}
    </HButton>
  );
}
