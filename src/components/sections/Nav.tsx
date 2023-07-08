"use client"
import { useState } from "react";
import Hamburger from "@components/partials/Hamburger";
import NavLink from "@components/partials/NavLink";
import Dropdown from "@components/partials/Dropdown";

const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Services",
    href: "/services",
  },
];

export default function Nav() {
  const [IsActive, SetIsActive] = useState(false);
  const author = "fiandev";
  const toggleActive = () => {
    SetIsActive(!IsActive);
  };

  return (
    <nav
      className={`fixed top-0 lg:px-[10vw] z-10 w-full shadow-sm px-3 py-1 flex gap-2 lg:px:8 flex-col lg:flex-row lg:justify-start bg-gradient-to-r from-sky-200 to-blue-100 dark:from-sky-800 dark:to-blue-600`}
    >
      <div className="w-full lg:w-fit flex justify-between items-center py-1">
        <h1 className="text-main duration-100 transform-gpu transform-cpu transition-transform max-w-fit font-bold text-lg uppercase">
          {author}
        </h1>
        <Hamburger
          className="w-12 h-12 transition duration-500 lg:hidden fill-slate-100 font-bold"
          toggleActive={toggleActive}
          IsActive={IsActive}
        />
      </div>

      <div
        className={`transition-all duration-1000 w-full flex backdrop-blur-sm lg:backdrop-blur-0 ${
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
