import { useState } from "react";
import { useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";

export default function Nav() {
  const [IsActive, SetIsActive] = useState(false);
  const toggleActive = () => {
    SetIsActive(!IsActive);
  };

  const request = (path) => {
    let location = useLocation();
    let { pathname } = location;

    return pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 lg:px-[10vw] z-10 w-full shadow-sm px-3 py-1 flex gap-2 lg:px:8 flex-col backdrop-blur-sm lg:flex-row lg:justify-start bg-gradient-to-r from-sky-200 to-blue-100 dark:bg-slate-800`}
    >
      <div className="w-full lg:w-fit flex justify-between items-center py-1">
        <h1 className="text-main hover:text-sky-400 max-w-fit font-bold text-lg hover:text-xl uppercase">
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
          {request("/") ? (
            <Dropdown
              className={`p-2 lg:py-0 ${
                request("/")
                  ? "bg-sky-100 rounded-md text-main"
                  : "text-sky-800 hover:bg-sky-100 hover:rounded-md hover:text-main bg-transparent"
              }`}
              text="home"
            >
              <NavLink
                to="#profile"
                text="profile"
                className={`${
                  request("#profile")
                    ? "bg-sky-100 rounded-md text-main"
                    : "text-sky-800 hover:bg-sky-100 hover:rounded-md hover:text-main bg-transparent"
                } `}
              />
              <NavLink
                to="#about"
                text="about"
                className={`${
                  request("#about")
                    ? "bg-sky-100 rounded-md text-main"
                    : "text-sky-800 hover:bg-sky-100 hover:rounded-md hover:text-main bg-transparent"
                } `}
              />
            </Dropdown>
          ) : (
            <NavLink
              text="Home"
              to="/"
              className={`${
                request("/")
                  ? "bg-sky-100 rounded-md text-main"
                  : "text-sky-800 hover:bg-sky-100 hover:rounded-md hover:text-main bg-transparent"
              } `}
            />
          )}
          <NavLink
            text="services"
            to="/services"
            className={`${
              request("/services")
                ? "bg-sky-100 rounded-md text-main"
                : "text-sky-800 hover:bg-sky-100 hover:rounded-md hover:text-main bg-transparent"
            } `}
          />
        </ul>
      </div>
    </nav>
  );
}
