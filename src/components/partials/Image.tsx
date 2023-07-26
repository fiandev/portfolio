"use client"

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
    e.target.src = "https://www.worldwidejournals.com/paripex/images/404-error.gif";
  };
  let resource = srcset || src;
  
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
