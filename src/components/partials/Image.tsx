import { randomID } from "@utils/functions";

export default function Image({ srcset, alt, className, onError }) {
  return (
    <img
      onError={onError || handleError}
      className={`${className} ${!Ready ? "bg-slate-400 animate-pulse" : ""}`}
      src={srcset || src}
      loading="lazy"
      alt={alt || randomID()}
      key={randomID()}
    />
  );
}
