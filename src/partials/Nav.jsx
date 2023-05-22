import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";

export default function Nav() {
  const [IsActive, SetIsActive] = useState(false);

  const toggleActive = () => {
    SetIsActive(!IsActive);
  };

  return (
    <nav
      className={`fixed lg:px-[10vw] z-10 w-full shadow-sm px-3 py-1 flex gap-2 lg:px:8 flex-col backdrop-blur-sm lg:flex-row lg:justify-start bg-gradient-to-r from-sky-200 to-blue-100 dark:bg-slate-800`}
    >
      <div className="w-full lg:w-fit flex justify-between items-center py-1">
        <h1 className="text-main hover:text-sky-400 max-w-fit font-bold text-lg hover:text-xl">
          {" "}
          fiandev{" "}
        </h1>
        <Hamburger
          className="w-12 h-12 transition duration-500 lg:hidden"
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
          <Dropdown className="p-2 lg:py-0" text="home">
            <NavLink to="#profile" className="p-2">
              Profile
            </NavLink>
            <NavLink to="#home" className="p-2">
              About
            </NavLink>
          </Dropdown>
          <NavLink className="p-2 lg:py-0" to="/">
            Articles
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
