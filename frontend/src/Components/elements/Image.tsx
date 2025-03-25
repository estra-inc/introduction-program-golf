"use client";

import { Image as HImage } from "@heroui/react";
import type { ImageProps } from "@heroui/react";

export function Image({ ...props }: ImageProps) {
  return <HImage {...props} />;
}
