import { useState, useEffect } from "react";

export default function Alert ({ children, className, duration = 2000 }) {
  let [Hidden, SetHidden] = useState(false);
  let [Missing, SetMissing] = useState(false);
  
  setTimeout(() => {
    SetHidden(true);
    setTimeout(() => {
      SetMissing(true);
    }, 1000);
  }, duration);
  
  return !Missing ?
    (
      <div className={ `transition duration-1000 ${ Hidden ? "scale-y-0" : "" } p-4 rounded-md bg-main text-slate-100 text-sm lg:text-xl ${ className }` }>
        { children }
      </div>
    )
  : null
}