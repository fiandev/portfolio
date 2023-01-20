import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Item ({ thumbnail, title, link }) {
  const defaultImage = "https://cdn.waifu.im/7048.jpg";
  return (
      <div className="group relative w-full h-64 overflow-hidden rounded-sm hover:rounded-md hover:shadow-md">
        <img src={ thumbnail ? thumbnail : defaultImage } alt={ title ? title : Math.random() * 100 } className="w-full transition-all group-hover:scale-150" />
        <div className="transition-all group-hover:rounded-md group-hover:shadow-md grid absolute place-items-center bottom-0 w-full h-32 hover:h-full bg-slate-50 bg-slate-50">
          <div className="group flex flex-col items-center gap-2">
            <p className="text-slate-800 text-lg font-serif text-bold">{ title || "name project" }</p>
            <a href={ link || "#" } className="flex gap-2 items-center transition-all duration-800 text-sm lg:text-md w-fit h-fit px-4 py-2 rounded-sm text-slate-50 bg-blue-400 outline outline-inherit hover:outline-blue-400 hover:outline-offset-2 hover:rounded-full">
              <FontAwesomeIcon className="transition-all group-hover:animate-bounce" icon={ faArrowUpRightFromSquare } />
              visit
            </a>
          </div>
        </div>
      </div>
    )
}