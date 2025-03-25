"use client";

import { Button as HButton } from "@heroui/react";
import type { ButtonProps as HButtonProps } from "@heroui/react";
import { useMemo } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & HButtonProps;

export function Button({ children, ...props }: ButtonProps) {
  const style = useMemo(() => {
    switch (props.variant) {
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
