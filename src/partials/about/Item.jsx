import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ViewportArea from "../../components/interactive/ViewportArea";
import Image from "../Image";

export default function Item({ children, data, className }) {
  return (
    data && (
      <ViewportArea>
        <div className={`p-4 rounded-md ${className || "bg-main"}`}>
          <h1 className="text-bold text-slate-50 capitalize text-md md:text-xl lg:text-2xl">
            {data.label}
          </h1>
          <ul className="no-scrollbar flex flex-col items-start justify-start text-slate-100 h-48 max-h-48 overflow-y-scroll">
            {data.items.map((item) => {
              return (
                <li className="flex gap-2 text-semibold items-center">
                  {item.icon ? (
                    <FontAwesomeIcon className="w-4 h-4" icon={item.icon} />
                  ) : (
                    <Image
                      className="w-4 h-4"
                      alt={`${data.label}'s icon`}
                      srcset={item.image || ""}
                    />
                  )}
                  <p>
                    {item.text.split("|")[0]}
                    <span className="text-bold text-slate-100">
                      {item.text.split("|").pop()}
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </ViewportArea>
    )
  );
}
