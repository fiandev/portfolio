import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { imageErrorHandler } from "../utils/functions";
import ButtonLink from "./portfolio/ButtonLink";

const defaultImage = "https://cdn.waifu.im/7048.jpg";

export default function Item({
  className,
  thumbnail,
  title,
  link,
  repo,
  stacks,
}) {
  return (
    <div
      className={`group relative w-full h-64 overflow-hidden rounded-sm hover:rounded-md hover:shadow-md ${className}`}
    >
      <img
        onError={(e) => imageErrorHandler(e, defaultImage)}
        src={thumbnail ? thumbnail : defaultImage}
        alt={title || "untitled"}
        className="w-full transition-all group-hover:scale-150"
      />
      <div className="transition-all group-hover:rounded-md group-hover:shadow-md grid absolute place-items-center bottom-0 w-full h-32 hover:h-full bg-slate-50 bg-slate-50">
        <div className="group flex flex-col items-center gap-2">
          <p className="text-slate-800 text-lg font-serif text-bold">
            {title || "untitled project"}
          </p>
          {stacks ? (
            <div className="flex items-center gap-0.5">
              {stacks.map((stack) => (
                <img src={stack.icon} />
              ))}
            </div>
          ) : null}
          <div className="flex items-center gap-2">
            <ButtonLink
              label="visit"
              link={link}
              icon={faArrowUpRightFromSquare}
            />
            {repo ? (
              <ButtonLink
                label="repository"
                link={repo}
                icon={["fab", "github"]}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
