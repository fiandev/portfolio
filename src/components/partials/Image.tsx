"use client";
import { randomID } from "@utils/functions";

export default function Image({ srcset, alt, className, onError }) {
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
