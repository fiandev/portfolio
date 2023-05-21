import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewportArea from "../../components/interactive/ViewportArea";
import { randomID } from "../../utils/functions";

export default function Item ({ children, data, className }) {
  return data ?
    (
      <ViewportArea key={ randomID() }>
        <div className={ `p-4 bg-blue-600 rounded-md ${ className || "" }` }>
          <h1 className="text-bold text-slate-50 capitalize text-md md:text-lg lg:text-xl">
            { data.label }
          </h1>
          <ul className="flex flex-col items-start text-slate-100">
            {
              data ? (
                data.items.map((item) => {
                  return (
                    <li className="flex gap-2 text-semibold items-center">
                      <FontAwesomeIcon className="w-4 h-4" icon={item.icon} />
                      <p>
                        { item.text.split("|")[0] }
                        <span className="text-bold text-slate-100">{ item.text.split("|").pop() }}</span>
                      </p>
                    </li>
                  )
                })
              )
              : null
            }
          </ul>
        </div>
      </ViewportArea>
    )
    : null
}