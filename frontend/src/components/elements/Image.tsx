"use client";

import { Image as HImage } from "@heroui/react";
import { useState } from "react";

import type { ImageProps } from "@heroui/react";

export function Image({ ...props }: ImageProps) {
  const [src, setSrc] = useState(props.src || "/assets/no-image.jpg");

  const handleError = () => {
    setSrc("/assets/no-image.jpg");
  };

  return <HImage {...props} src={src} onError={handleError} />;
}