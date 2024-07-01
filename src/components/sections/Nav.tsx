"use client";
import { useState, useEffect, useRef } from "react";
import { lazy } from "react";

import Link from "next/link";

const Hamburger = lazy(() => import("@/components/partials/Hamburger"));
const NavLink = lazy(() => import("@/components/partials/NavLink"));
const Dropdown = lazy(() => import("@/components/partials/Dropdown"));

export const navLinks: any[] = [
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
  {
    text: "Blog",
    href: "/blog",
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
    if (!NavRef?.current) return;

    let offset = NavRef.current?.clientHeight + 5;

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
      ref={NavRef}
      className={`top-0 lg:px-[10vw] z-10 w-full px-3 py-1 flex gap-2 lg:px:8 flex-col lg:flex-row lg:justify-start ${isWindowScrolled
        ? "fixed shadow-md bg-gradient-to-r from-sky-200 to-blue-100 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900"
        : "relative bg-slate-100 dark:bg-slate-800"
        }`}
    >
      <div className="w-full lg:w-fit flex justify-between items-center py-1 transition ease-in duration-800">
        <Link
          className="text-slate-600 dark:text-main duration-100 max-w-fit font-bold text-lg uppercase hover:underline"
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
        className={`transition ease-in duration-800 w-full flex backdrop-blur-md lg:backdrop-blur-0 ${navOpen ? "max-h-fit" : "max-h-0"
          } overflow-y-hidden lg:overflow-y-visible lg:max-h-fit flex-col lg:flex-row`}
      >
        <ul className="flex py-2.5 lg:py-0 w-full flex-col lg:flex-row lg:items-center lg:justify-end lg:gap-2 uppercase">
          {navLinks.map((link) => {
            return link?.navLinks ? (
              <Dropdown>
                {link?.navLinks.map((link) => {
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
