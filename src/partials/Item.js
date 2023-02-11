import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const defaultImage = "https://cdn.waifu.im/7048.jpg";
const imageErrorHandler = (e) => {
  e.target.src = defaultImage;
}

export default function Item ({ className, thumbnail, title, link, repo, stacks }) {
  return (
      <div className={ `group relative w-full h-64 overflow-hidden rounded-sm hover:rounded-md hover:shadow-md ${className}` }>
        <img onError={ (e) => imageErrorHandler(e) } src={ thumbnail ? thumbnail : defaultImage } alt={ title ? title : Math.random() * 100 } className="w-full transition-all group-hover:scale-150" />
        <div className="transition-all group-hover:rounded-md group-hover:shadow-md grid absolute place-items-center bottom-0 w-full h-32 hover:h-full bg-slate-50 bg-slate-50">
          <div className="group flex flex-col items-center gap-2">
            <p className="text-slate-800 text-lg font-serif text-bold">{ title || "name project" }</p>
            {
              stacks ?
                <div className="flex items-center gap-0.5">
                  {
                    stacks.map(stack => <img src={ stack.icon } />)
                  }
                </div>
              : null
            }
            <div className="flex items-center gap-2">
              <a href={ link || "#" } className="flex gap-2 items-center transition-all duration-800 text-sm lg:text-md w-fit h-fit px-4 py-2 rounded-sm text-slate-50 bg-blue-400 outline outline-inherit hover:outline-blue-400 hover:outline-offset-2 hover:rounded-full">
                <FontAwesomeIcon className="transition-all group-hover:animate-bounce" icon={ faArrowUpRightFromSquare } />
                visit
              </a>
              {
                repo ? 
                  <a href={ repo || "#" } className="flex gap-2 items-center transition-all duration-800 text-sm lg:text-md w-fit h-fit px-4 py-2 rounded-sm text-slate-50 bg-blue-400 outline outline-inherit hover:outline-blue-400 hover:outline-offset-2 hover:rounded-full">
                    <FontAwesomeIcon className="transition-all group-hover:animate-bounce" icon={ ["fab", "github"] } />
                    repository
                  </a>
                : null
              }
            </div>
          </div>
        </div>
      </div>
    )
}