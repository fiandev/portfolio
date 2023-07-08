import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonLink({
  link,
  icon,
  label = "no label",
  name,
  className,
}) {
  return (
    <a
      href={link || "#"}
      key={name || label}
      className={`group/button flex gap-2 items-center transition-all duration-800 p-2 rounded-sm hover:rounded-full ${className}`}
    >
      <FontAwesomeIcon
        className="transition-all group-hover/button:animate-bounce"
        icon={icon}
      />
      <span>{label || "visit"}</span>
    </a>
  );
}
