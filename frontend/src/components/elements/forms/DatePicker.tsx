"use client";

import { DatePicker as HDatePicker, DatePickerProps } from "@heroui/react";

export function DatePicker({ ...props }: DatePickerProps) {
  return <HDatePicker {...props} />;
}
