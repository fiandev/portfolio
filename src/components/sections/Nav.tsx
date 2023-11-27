"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Hamburger from "@components/partials/Hamburger";
import NavLink from "@components/partials/NavLink";
import Dropdown from "@components/partials/Dropdown";

export const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "About",
    href: "/about",
  },
];

export default function Nav() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isWindowScrolled, setWindowScrolled] = useState<boolean>(false);
  const NavRef = useRef();
  const author = "fiandev";
  
  const navHandler = () => {
    setNavOpen(!navOpen);
  };

  const scrollHandler = () => {
    let offset = NavRef.current.clientHeight + 5;

    if (window.scrollY > offset) setWindowScrolled(true);
    else setWindowScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isWindowScrolled]);

  return (
    <nav
      className={`top-0 lg:px-[10vw] z-10 w-full px-3 py-1 flex gap-2 lg:px:8 flex-col lg:flex-row lg:justify-start ${
        isWindowScrolled
          ? "fixed shadow-md bg-gradient-to-r from-sky-200 to-blue-100 dark:from-sky-800 dark:to-blue-600"
          : "relative bg-slate-200 dark:bg-slate-900"
      } lg:bg-gradient-to-r lg:from-sky-200 lg:to-blue-100 dark:lg:from-sky-800 dark:lg:to-blue-600`}
    >
      <div className="w-full lg:w-fit flex justify-between items-center py-1 transition ease-in duration-800">
        <Link
          className="text-main duration-100 max-w-fit font-bold text-lg uppercase hover:underline"
          href="/"
        >
          {author}
        </Link>
        <Hamburger
          className="w-12 h-12 transition duration-500 lg:hidden fill-slate-100 font-bold"
          toggleActive={() => setNavOpen(!navOpen)}
          IsActive={navOpen}
        />
      </div>

      <div
        className={`transition ease-in duration-800 w-full flex backdrop-blur-md lg:backdrop-blur-0 ${
          IsActive ? "max-h-fit" : "max-h-0"
        } overflow-y-hidden lg:overflow-y-visible lg:max-h-fit flex-col lg:flex-row`}
      >
        <ul className="flex py-2.5 lg:py-0 w-full flex-col lg:flex-row lg:items-center lg:justify-end lg:gap-2 uppercase">
          {links.map((link) => {
            return link.links ? (
              <Dropdown>
                {link.links.map((link) => {
                  return <NavLink text={link.text} to={link.href} />;
                })}
              </Dropdown>
            ) : (
              <NavLink text={link.text} to={link.href} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
