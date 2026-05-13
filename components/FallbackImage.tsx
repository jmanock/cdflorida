"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const DEFAULT_FALLBACK_IMAGE = "/images/fallbacks/cruise-placeholder.png";

type FallbackImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};

export function FallbackImage({ src, fallbackSrc = DEFAULT_FALLBACK_IMAGE, alt, onError, ...props }: FallbackImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={(event) => {
        if (imageSrc !== fallbackSrc) {
          trackEvent("image_fallback_used", {
            image_src: imageSrc,
            page_path: window.location.pathname
          });
          setImageSrc(fallbackSrc);
        }
        onError?.(event);
      }}
    />
  );
}
