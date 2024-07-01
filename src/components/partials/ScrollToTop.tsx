"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop({
  className,
}: {
  className?: string | null;
}) {
  const [position, setPosition] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const offsetY = 50;

  useEffect(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    const handler = () => {
      setPosition(window.scrollY);
    };

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setClicked(false);

    window.addEventListener("scroll", handler);

    setIsBottom(bottom);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [clicked]);

  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`${position > offsetY ? "scale-100" : "scale-0"} ${isBottom ? "animate-bounce" : ""
        } py-2 px-4 lg:p-0 lg:hover:animate-bounce duration-800 hover:outline hover:cursor-pointer duration-500 transition-transform fixed z-[99] -rotate-90 lg:rotate-0  w-fit h-fit bottom-[50%] bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-sm lg:bottom-2 right-2 lg:w-12 lg:h-12 rounded-full text-lg flex items-center gap-4 justify-center ${className}`}
    >
      <span className="text-slate-800 dark:text-slate-100 lg:hidden">top</span>
      <FontAwesomeIcon icon={faArrowUp} className="rotate-90 lg:rotate-0"/>
    </div>
  );
}
