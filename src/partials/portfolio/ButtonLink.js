import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonLink ({ link, icon, label }) {
  return (
      <a
        href={link || "#"}
        className="group/button flex gap-2 items-center transition-all duration-800 text-sm lg:text-md w-fit h-fit px-4 py-2 rounded-sm text-slate-50 bg-blue-400 outline outline-inherit hover:outline-blue-400 hover:outline-offset-2 hover:rounded-full"
      >
        <FontAwesomeIcon
          className="transition-all group-hover/button:animate-bounce"
          icon={ icon }
        />
        { label || "visit" }
      </a>
    )
}