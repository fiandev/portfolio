import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faXTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTelegram,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";

const icons = {
  facebook: faFacebook,
  instagram: faInstagram,
  whatsapp: faWhatsapp,
  x: faXTwitter,
  github: faGithub,
  gitlab: faGitlab,
  linkedin: faLinkedin,
  telegram: faTelegram,
  mail: faMailchimp,
};

export default function ItemContact({
  className,
  icon = "",
  username = "username",
  description = "...",
  link = "#",
}: {
  className?: string;
  icon?: string;
  username?: string;
  description?: string;
  link?: any;
}) {
  return (
    <a
      href={link || "#"}
      className={`${className} group/contact hover:bg-sky-400 dark:hover:bg-slate-900 dark:bg-main hover:font-bold outline outline-main outline-sm hover:outline-md hover:outline-gray-800 dark:hover:outline-slate-50 rounded-md shadow-gray-900 dark:shadow-slate-100 w-32 w-max-32 h-24 p-4 flex flex-col gap-1 text-center justify-center border-main overflow-hidden`}
    >
      <FontAwesomeIcon
        icon={icons[icon]}
        className="dark:text-slate-900 text-main dark:group-hover/contact:text-slate-100 text-lg group-hover/contact:animate-bounce group-hover/contact:text-slate-600"
      />
      <h1 className="hover:text-underline truncate font-serif text-sm font-semibold text-slate-600 dark:text-slate-100 uppercase group-hover/contact:text-slate-100">
        {description}
      </h1>
      <p className="my-0 hover:underline lowercase truncate text-xs font-semibold text-slate-400 dark:text-slate-200 group-hover/contact:text-slate-200">
        {username}
      </p>
    </a>
  );
}
