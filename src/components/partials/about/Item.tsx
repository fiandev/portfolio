import { lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { randomID } from "@utils/functions";

const Image = lazy(() => import("../Image"));

export default function Item({
  children,
  data,
  className,
}: {
  children?: React.ReactNode;
  data?: any;
  className?: string;
}) {
  return (
    data && (
      <div
        className={`p-4 rounded-md flex flex-col gap-2 ${className || "bg-main"
          }`}
        key={randomID()}
      >
        <h1 className="font-bold text-slate-50 capitalize text-lg lg:text-xl xl:text-2xl">
          {data.label}
        </h1>
        <ul className="no-scrollbar flex flex-col items-start justify-start text-slate-100 gap-2 h-48 max-h-48 text-sm md:text-base lg:text-lg xl:text-xl overflow-y-scroll hover:cursor-ns-resize">
          {data.items.map((item) => {
            return (
              <li
                key={randomID()}
                className="flex gap-2 text-semibold items-center"
              >
                {item.icon ? null : (
                  <Image
                    className="w-6 h-6 bg-slate-200 dark:bg-slate-100 p-[.1rem] rounded-full"
                    alt={`${data.label}'s icon`}
                    srcset={item.image || ""}
                  />
                )}
                <div className="flex gap-1 justify-betweem">
                  <p className="w-fit max-w-32 font-semibold">
                    {item.text.split("|")[0].trim()}
                  </p>
                  <span className="text-bold text-slate-100 font-light">
                    {item.text.split("|").pop().trim()}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
