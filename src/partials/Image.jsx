import { useState } from "react";
import { randomID } from "../utils/functions";

export default function Image ({ srcset, alt, className, onError }) {
  const [Ready, SetReady] = useState(false);
  
  function domReady(fn) {
    document.addEventListener("DOMContentLoaded", fn);
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
      document.removeEventListener("DOMContentLoaded", fn);
      fn();
    }
  }
  
  function handleError(e) {
    e.target.setAttribute("src", "");
  }
  
  domReady(() => {
    if (!Ready) SetReady(!Ready);
  });
  
  return srcset && (
      <img 
        onError={ onError || handleError }
        className={ `${ className } ${ !Ready ? "bg-slate-400 animate-pulse" : "" }` } 
        src={ Ready ? srcset : null } 
        loading="lazy" 
        alt={ alt || randomID() }
        key={ randomID() }
      />
    );
}