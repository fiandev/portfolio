import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from ".//ButtonLink";


const setThumbnail = (e) => {
  const element = e.target;
  fetch("https://api.waifu.pics/sfw/waifu")
    .then(response => response.json())
    .then(res => element.setAttribute("src", res.url))
    .catch(e => console.log(e));
};

export default function Item({
  className,
  thumbnail,
  title,
  description,
  link,
  repo,
  stacks,
}) {
  return (
    <div
      className={`group relative w-full h-72 overflow-hidden rounded-sm hover:rounded-md hover:shadow-md ${className}`}
    >
      <img
        onError={ (e) => setThumbnail(e) }
        src={thumbnail ? thumbnail.base64 : ""}
        alt={title || "untitled"}
        className="w-full transition-all group-hover:scale-150 bg-sky-400"
      />
      <div className="transition-all group-hover:rounded-md group-hover:shadow-md absolute flex justify-center items-center bottom-0 w-full h-40 overflow-y-scroll py-4 hover:h-full bg-slate-50 bg-slate-50">
        <div className="group/item flex flex-col items-center gap-2">
          <p className="text-slate-800 text-lg font-serif text-bold">
            { title || "untitled project" }
          </p>
          <p className="text-center text-slate-800 text-xs font-serif text-semibold">
            { description || "no description" }
          </p>
            {stacks ? (
              <div className="flex w-fit shrink-0 items-center justify-center gap-0.5">
                {stacks.map((stack) => (
                  <img className="w-5 h-5" src={stack.icon} alt={ stack.name } />
                ))}
              </div>
            ) : null}
            <div className="flex items-center gap-2">
              <ButtonLink
                label="visit"
                name={ `visit ${ title }` }
                link={link}
                icon={faArrowUpRightFromSquare}
              />
              {repo ? (
                <ButtonLink
                  label="repository"
                  name={ `repository ${ title }` }
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
