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

    window.addEventListener("scroll", handler);

    setIsBottom(bottom);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [clicked]);
  return (
    <div
      onClick={() => setClicked(true)}
      className={`${position > offsetY ? "scale-100" : "scale-0"} ${
        isBottom ? "animate-bounce" : ""
      } hover:outline hover:cursor-pointer duration-500 transition-transform fixed z-[99] bottom-2 right-2 w-12 h-12 rounded-full text-lg flex items-center justify-center ${className}`}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
}
