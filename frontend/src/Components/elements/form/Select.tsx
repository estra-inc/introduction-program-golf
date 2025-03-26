"use client";

import { Select as HSelect, SelectItem as HSelectItem } from "@heroui/react";
import { SelectProps as HSelectProps } from "@heroui/react";
import { Key } from "react";

type SelectProps = {
  options: { label: string; value: Key | null | undefined }[];
} & Omit<HSelectProps, "children">;

export function Select({ options, ...props }: SelectProps) {
  return (
    <HSelect {...props}>
      {options.map((option) => (
        <HSelectItem key={option.value}>{option.label}</HSelectItem>
      ))}
    </HSelect>
  );
}
