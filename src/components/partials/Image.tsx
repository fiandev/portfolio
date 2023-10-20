"use client";
import NwxtImage from "next/image";
import { useEffect } from "react";
export default function Image({
  srcset,
  alt,
  className,
  onError,
  src,
  w = 1024,
  h = 1024,
}: {
  src?: string;
  srcset?: string;
  alt?: string;
  className?: string;
  onError?: Function;
  w?: number;
  h?: number;
}) {
  const handleError = (e) => {
    e.target.src =
      "https://www.worldwidejournals.com/paripex/images/404-error.gif";
  };
  let resource = srcset || src;

  useEffect(() => {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <NextImage
      onError={onError || handleError}
      className={className}
      alt={alt || resource}
      src={resource}
      width={w}
      height={h}
    />
  );
}
