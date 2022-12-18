import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";

const Nav = () => {
  const [IsActive, SetIsActive] = useState(false);
  
  const toggleActive = () => {
    SetIsActive(!IsActive);
  }
  
  return (
      <nav className={ `fixed z-10 w-full shadow-sm px-3 py-1 flex gap-2 lg:px:8 flex-col backdrop-blur-sm lg:backdrop-blur-0 lg:flex-row lg:justify-between bg-gradient-to-r from-sky-200 to-blue-100 dark:bg-slate-800` }>
        <div className="w-full flex justify-between items-center py-1">
          <h1 className="text-main hover:text-sky-400 max-w-fit font-bold text-lg hover:text-xl"> fiandev </h1>
          <Hamburger className="w-12 h-12 transition duration-500 lg:hidden" toggleActive={ toggleActive } IsActive={ IsActive }/>
        </div>
        
        <div className={ `transition duration-1000 w-full flex overflow-y-hidden backdrop-blur-sm lg:backdrop-blur-0 ${ IsActive ? "max-h-fit" : "max-h-0" } lg:max-h-fit flex-col lg:flex-row` }>
          <ul className="flex w-full flex-col lg:flex-row lg:justify-end lg:gap-2 uppercase">
            <Dropdown className="px-1 py-2" text="home">
              <NavLink to="#profile" className="px-1 py-2">Profile</NavLink>
              <NavLink to="#home" className="px-1 py-2">About</NavLink>
            </Dropdown>
            <NavLink to="/articles" className="px-1 py-2">Articles</NavLink>
          </ul>
        </div>
        
        
      </nav>
    )
}


export default Nav;