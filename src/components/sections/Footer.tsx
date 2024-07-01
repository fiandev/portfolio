import { lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faXTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { randomID } from "@utils/functions";
import { navLinks } from "@components/sections/Nav";
import Link from "next/link";

const FooterBackLinks = lazy(
  () => import("@/components/partials/footer/FooterBackLinks"),
);
const Image = lazy(() => import("@/components/partials/Image"));
const ThemeToggler = lazy(() => import("@/components/partials/ThemeToggler"));

const icons = {
  facebook: faFacebook,
  instagram: faInstagram,
  whatsapp: faWhatsapp,
  x: faXTwitter,
  github: faGithub,
  gitlab: faGitlab,
  linkedin: faLinkedin,
  telegram: faTelegram,
};

export default async function Footer() {
  let json = (await import("@assets/json/data.json")).default;
  let data = json.data;
  let { links = [], portfolios = [], footer_about = "" } = data;

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto w-full xl:max-w-screen-xl p-6 lg:py-8">
        <div className="flex flex-col gap-2">
          <div className="mb-6 md:mb-0">
            <h2 className="flex items-center">
              <Image
                src="/logo.png"
                className="w-8 h-8 mr-3"
                w={20}
                h={20}
                alt="fiandev's logo"
              />
              <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">
                fiandev
              </Link>
            </h2>
            <p className="w-3/4 py-2 text-lg text-gray-400 dark:text-gray-200">
              {footer_about}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
            <FooterBackLinks links={navLinks} />
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                portfolios
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {portfolios
                  ? portfolios.slice(0, 5).map((project) => {
                    return (
                      <li key={randomID()}>
                        <a
                          href={project.preview || "#"}
                          className={`hover:underline w-[80%] truncate ${project.preview ? "hover:font-semibold" : ""
                            }`}
                        >
                          {project.title}
                        </a>
                      </li>
                    );
                  })
                  : null}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Others
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li key={randomID()}>
                  <Link
                    href="https://github.com/fiandev/portfolio"
                    className={`hover:underline truncate w-[80%] hover:font-semibold capitalize`}
                  >
                    source code
                  </Link>
                </li>
                <li key={randomID()}>
                  <Link
                    href="/sitemap.xml"
                    className={`hover:underline truncate w-[80%] hover:font-semibold capitalize`}
                  >
                    sitemaps
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="https://github.com/fiandev" className="hover:underline">
              fiandev
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {links
              ? links.map((link) => {
                return (
                  <a
                    key={randomID()}
                    href={link.url}
                    className="w-6 h-6 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-main dark:hover:text-sky-500"
                  >
                    <FontAwesomeIcon icon={icons[link.type]} />
                  </a>
                );
              })
              : null}
            <ThemeToggler />
          </div>
        </div>
      </div>
    </footer>
  );
}
