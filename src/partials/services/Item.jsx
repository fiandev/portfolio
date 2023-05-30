import { faShop } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "./ButtonLink";
import Image from "../Image";

export default function Item({
  className,
  thumbnail = "",
  description = "...",
  title = "untitled",
  link = "#",
}) {
  return (
    <div
      href={link || "#"}
      className={`${className} relative group/item hover:bg-sky-400 dark:hover:bg-slate-900 dark:bg-main hover:font-bold outline outline-main outline-sm hover:outline-md hover:outline-gray-800 dark:hover:outline-slate-50 rounded-md shadow-gray-900 dark:shadow-slate-100 w-28 w-max-28 h-24 p-4 flex flex-col gap-1 text-center justify-center border-main overflow-hidden`}
    >
      <Image
        srcset={thumbnail}
        className="hidden group-hover/item:block group-hover/item:scale-125 transition-all duration-1000 delay-500 group-hover/item:blur-sm absolute inset-0 h-max w-max"
      />
      <div className="relative flex flex-col gap-1 items-center">
        <h1 className="hover:text-underline font-serif text-sm font-semibold text-slate-600 dark:text-slate-100 uppercase group-hover/item:text-slate-100">
          {description}
        </h1>
        <p className="capitalize hover:underline lowercase truncate text-xs font-semibold text-slate-400 dark:text-slate-200 group-hover/item:text-slate-200">
          {title}
        </p>

        <ButtonLink
          label="buy now"
          icon={faShop}
          className="w-18 h-6 outline group-hover/item:bg-main group-hover/item:text-slate-200 group-hover/item:flex hidden"
        />
      </div>
    </div>
  );
}
