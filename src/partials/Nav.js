import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "./Hamburger";

const Nav = () => {
  const [IsActive, SetIsActive] = useState(false);
  const [IsNavFixed, SetIsNavFixed] = useState(false);
  
  const toggleActive = () => {
    SetIsActive(!IsActive);
  }
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) SetIsNavFixed(true);
    else SetIsNavFixed(false);
  })
  
  return (
      <nav
          className={ `fixed z-10 w-screen shadow-sm px-3 py-1 flex gap-2 flex-col
          dark:bg-slate-800` }
        >
        <div className="w-full flex justify-between items-center">
          <h1 className="text-main max-w-fit"> fiandev </h1>
          <Hamburger 
            className="min-w-12 w-12 h-12 transition duration-500" 
            toggleActive={ toggleActive } 
          />
        </div>
        
        <div className={ `transition duration-1000 flex overflow-y-hidden backdrop-blur-sm ${ IsActive ? "max-h-fit" : "max-h-0" } sm:flex-col lg:flex-row` }>
          <ul className="flex w-full flex-col lg:flex-row gap-2 uppercase">
            <li className="group py-2 flex w-full px-1 text-main bg-blue-50 hover:bg-blue-100 hover:rounded-md">
              <Link className="duration-1000 flex sm:w-full group-hover:pl-2" to="/">home</Link>
            </li>
          </ul>
        </div>
        
        
      </nav>
    )
}


export default Nav;