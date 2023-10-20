"use client";
import { useEffect } from "react";
export default function Image({
  srcset,
  alt,
  className,
  onError,
  src,
}: {
  src?: string;
  srcset?: string;
  alt?: string;
  className?: string;
  onError?: Function;
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
    <img
      sizes="100%"
      onError={onError || handleError}
      className={className}
      src={resource}
      alt={alt || resource}
      key={resource}
    />
  );
}
