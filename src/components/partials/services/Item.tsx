"use client";
import { useEffect } from "react";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "./ButtonLink";
// import Image from "../Image";

export default function Item({
  className,
  thumbnail = "",
  description = "...",
  title = "untitled",
  link = "#",
}) {
  useEffect(() => {
    link = window.encodeURIComponent(link);
  }, [link]);

  return (
    <div
      className={`${className} relative group/item hover:font-bold outline outline-main outline-sm hover:outline-md hover:outline-gray-800 dark:hover:outline-slate-50 rounded-md shadow-gray-900 dark:shadow-slate-100 w-28 w-max-28 h-24 p-4 flex flex-col gap-1 text-center justify-center border-main overflow-hidden`}
    >
      <img
        src={thumbnail}
        className="group-hover/item:scale-125 group-hover/item:skew-x-3 transition-all duration-1000 group-hover/item:blur-sm absolute inset-0 w-max"
      />
      <div className="absolute h-36 transition-all hover:h-full inset-x-0 bottom-0 bg-slate-100 dark:bg-slate-800 flex flex-col gap-1 items-center justify-center">
        <h1 className="group-hover/item:font-outline-0 hover:text-underline font-serif text-sm font-bold text-main uppercase">
          {title}
        </h1>
        <p className="h-10 overflow-hidden group-hover/item:h-fit text-ellipsis capitalize hover:underline lowercase text-xs w-28 text-center font-semibold text-slate-800 dark:text-slate-100">
          {description}
        </p>

        <ButtonLink
          label="order now"
          icon={faShop}
          link={link || "#"}
          className="flex scale-0 group-hover/item:scale-100 transition-transform w-18 h-6 text-xs uppercase outline delay-100 group-hover/item:bg-main group-hover/item:text-slate-200"
        />
      </div>
    </div>
  );
}
