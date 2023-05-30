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
      name={name || label}
      className={`group/button flex gap-2 items-center transition-all duration-800 text-sm lg:text-md p-2 rounded-sm hover:rounded-full ${className}`}
    >
      <FontAwesomeIcon
        className="transition-all group-hover/button:animate-bounce"
        icon={icon}
      />
      <span className="text-sm">{label || "visit"}</span>
    </a>
  );
}
