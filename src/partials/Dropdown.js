import { useState } from "react";

const Dropdown = ({ className, children, text }) => {
  let [IsActive, SetIsActive] = useState(false);
  
  const handler = () => {
    SetIsActive(!IsActive);
  }
  
  return (
    <div onClick={ handler } className={ `${ className } group w-full lg:w-fit text-sky-800 font-semibold` }>
      <div className={ `flex justify-between w-full lg:w-fit text-sky-800 font-semibold hover:text-main bg-transparent hover:bg-sky-100 hover:rounded-md ${ className }` }>
        { text }
        <span>?</span>
      </div>
      <ul className={ `border-left border-sky-100 transition-all duration-1000 flex flex-col gap-2 overflow-hidden max-h-0 group-hover:max-h-fit w-full group-hover:pl-2 lg:group-hover:pl-0 group-hover:text-main lg:group-hover:px-2`}>
        { children }
      </ul>
    </div>
    )
}

export default Dropdown;