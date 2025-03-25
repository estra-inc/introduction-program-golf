"use client";

import { Pagination as HPagination } from "@heroui/react";
import type { PaginationProps } from "@heroui/react";

export function Pagination({ ...props }: PaginationProps) {
  return <HPagination {...props} />;
}
