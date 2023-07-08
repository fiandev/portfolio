"use client";
import { randomID } from "@utils/functions";

export default function Image({ srcset, alt, className, onError, src }: {
  src?: string
  srcset?: string
  alt?: string
  className?: string
  onError?: any
}) {
  const handleError = () => {
    // todo
  };

  return (
    <img
      onError={onError || handleError}
      className={className}
      src={srcset || src}
      loading="lazy"
      alt={alt || randomID()}
      key={randomID()}
    />
  );
}
