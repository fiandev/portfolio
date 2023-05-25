import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ViewportArea from "../../components/interactive/ViewportArea";
import Image from "../Image";

export default function Item({ children, data, className }) {
  return (
    data && (
      <ViewportArea>
        <div
          className={`p-4 rounded-md flex flex-col gap-2 ${
            className || "bg-main"
          }`}
        >
          <h1 className="text-bold text-slate-50 capitalize text-lg lg:text-xl xl:text-2xl">
            {data.label}
          </h1>
          <ul className="no-scrollbar flex flex-col items-start justify-start text-slate-100 gap-2 h-48 max-h-48 text-sm md:text-base lg:text-lg xl:text-xl overflow-y-scroll">
            {data.items.map((item) => {
              return (
                <li className="flex gap-2 text-semibold items-center">
                  {item.icon ? null : (
                    <Image
                      className="w-6 h-6"
                      alt={`${data.label}'s icon`}
                      srcset={item.image || ""}
                    />
                  )}
                  <div className="flex gap-1 justify-betweem">
                    <p className="w-fit max-w-32">{item.text.split("|")[0]}</p>
                    <span className="text-bold text-slate-100">
                      {item.text.split("|").pop()}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </ViewportArea>
    )
  );
}
