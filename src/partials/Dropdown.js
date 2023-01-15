import { useState, useEffect } from "react";

export default function Dropdown ({ className, children, text }) {
  let [IsActive, SetIsActive] = useState(false);
  
  const handler = () => {
    SetIsActive(!IsActive);
  }
  
  
  
  
  return (
    <div onClick={ handler } className={ `flex flex-col items-start z-20 md:relative group w-full lg:w-fit text-sky-800 font-semibold` }>
      <div className={ `${ className } px-2 flex justify-between w-full lg:w-fit text-sky-800 font-semibold hover:text-main bg-transparent hover:bg-sky-100 hover:rounded-md ${ className }` }>
        { text }
        <span>?</span>
      </div>
      <ul className={ `${ !IsActive ? "h-0" : "h-min-48 md:top-[2rem] md:absolute z-20 md:shadow-md md:bg-slate-50 md:w-fit p-2" } border-left border-sky-100 transition-all duration-1000 flex flex-col gap-2 overflow-hidden w-full group-hover:text-main`}>
        { children }
      </ul>
    </div>
    )
}