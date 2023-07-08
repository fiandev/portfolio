"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({ className, children, text }) {
  let [IsActive, SetIsActive] = useState(false);

  const handler = () => {
    SetIsActive(!IsActive);
  };

  return (
    <div
      onClick={handler}
      className={`flex flex-col items-start z-20 md:relative group w-full lg:w-fit font-semibold`}
    >
      <div
        className={`px-2 flex justify-between items-center w-full lg:w-auto lg:gap-4 font-semibold ${className}`}
      >
        {text}
        <FontAwesomeIcon icon={IsActive ? faCaretUp : faCaretDown} />
      </div>
      <ul
        className={`dropdown ${
          !IsActive
            ? "h-0"
            : "h-min-48 lg:top-[2rem] lg:absolute z-20 lg:shadow-md lg:bg-slate-50 lg:w-48 p-2"
        } border-left border-sky-100 transition-all duration-1000 flex flex-col gap-2 overflow-hidden w-full`}
      >
        {children}
      </ul>
    </div>
  );
}
