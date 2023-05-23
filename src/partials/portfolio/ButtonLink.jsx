import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonLink({ link, icon, label, name }) {
  return (
    <a
      href={link || "#"}
      name={name || "no name"}
      className="group/button flex gap-2 items-center transition-all duration-800 text-sm lg:text-md w-fit h-fit p-2 hover:px-4 hover:py-2 rounded-sm text-slate-50 bg-blue-400 outline outline-inherit hover:outline-blue-400 hover:outline-offset-2 hover:rounded-full"
    >
      <FontAwesomeIcon
        className="transition-all group-hover/button:animate-bounce"
        icon={icon}
      />
      <span className="group-hover/button:inline group-hover/button:scale-100 delay-100 transition-transform scale-0 hidden">
        {label || "visit"}
      </span>
    </a>
  );
}
