import { lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { randomID } from "@utils/functions";
import { navLinks } from "@components/sections/Nav";

const FooterBackLinks = lazy(
  () => import("@components/partials/footer/FooterBackLinks"),
);
const Image = lazy(() => import("@components/partials/Image"));

const icons = {
  facebook: faFacebook,
  instagram: faInstagram,
  whatsapp: faWhatsapp,
  twitter: faTwitter,
  github: faGithub,
  gitlab: faGitlab,
  linkedin: faLinkedin,
  telegram: faTelegram,
};

export default async function Footer() {
  let json = (await import("@assets/json/data.json")).default;
  let data = json.data;
  let { links = [], portfolios = [] } = data;

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://fiandev.my.id" className="flex items-center">
              <Image
                src="/logo.png"
                className="w-8 h-8 mr-3"
                w={20}
                h={20}
                alt="fiandev's logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">
                fiandev
              </span>
            </a>
          </div>
          <div className="grid lg:grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterBackLinks links={navLinks} />
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                portfolios
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {portfolios
                  ? portfolios.slice(0, 5).map((project) => {
                      return (
                        <li>
                          <a
                            href={project.preview || "#"}
                            className={`hover:underline ${
                              project.preview ? "hover:font-semibold" : ""
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
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © { new Date().getFullYear() }
            <a href="https://github.com/fiandev" className="hover:underline">
              Fiandev
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
                      className="w-6 h-6 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-primary"
                    >
                      <FontAwesomeIcon icon={icons[link.type]} />
                    </a>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
