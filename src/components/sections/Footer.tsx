import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import ViewportArea from "@components/interactive/ViewportArea";
import Image from "@components/partials/Image";
import { randomID } from "@utils/functions";

const icons = {
  facebook: faFacebook,
  instagram: faInstagram,
  whatsapp: faWhatsapp,
  twitter: faTwitter,
  github: faGithub,
  linkedin: faLinkedin,
  telegram: faTelegram,
};

export default async function Footer() {
  let json = (await import("@assets/json/data.json")).default;
  let data = json.data;
  let { links = [], portfolios = [] } = data;

  return (
    <footer class="bg-white dark:bg-gray-800">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://fiandev.my.id" class="flex items-center">
              <Image
                src="/logo.png"
                class="w-8 h-8 mr-3"
                w={20}
                h={20}
                alt="fiandev's logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">
                fiandev
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link href="/" class="hover:underline">
                    home
                  </Link>
                </li>
                <li class="mb-4">
                  <Link href="/services" class="hover:underline">
                    services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                portfolios
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                {portfolios
                  ? portfolios.map((project) => {
                      return (
                        <li>
                          <a
                            href={project.preview || "#"}
                            class={`hover:underline ${
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
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://github.com/fiandev" class="hover:underline">
              fiandev
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {links
              ? links.map((link) => {
                  return (
                    <a
                      key={randomID()}
                      href={link.url}
                      class="w-6 h-6 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-gray-200 hover:font-bold"
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
