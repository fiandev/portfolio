import { faShop } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "./ButtonLink";

const setThumbnail = (e) => {
  const element = e.target;
  fetch("https://api.waifu.pics/sfw/waifu")
    .then((response) => response.json())
    .then((res) => element.setAttribute("src", res.url))
    .catch((e) => console.log(e));
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
      className={`group grid place-items-center relative overflow-hidden rounded-sm hover:rounded-md hover:shadow-md ${className}`}
    >
      <div className="flex items-center flex-col gap-2 p-2 text-center text-slate-100 font-bold">
        <h1 className="text-sm capitalize"> {title} </h1>
        <p className="text-xs"> {description} </p>
      </div>

      <ButtonLink icon={faShop} label="buy now" />
    </div>
  );
}
