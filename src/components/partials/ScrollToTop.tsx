"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop({ className }) {
  const [position, setPosition] = useState(0);
  const offsetY = 50;
  const bottom =
    Math.ceil(window.innerHeight + window.scrollY) >=
    document.documentElement.scrollHeight;
  const handler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", function () {
    setPosition(window.scrollY);
  });

  return (
    <div
      onClick={handler}
      className={`${position > offsetY ? "scale-100" : "scale-0"} ${
        bottom ? "animate-bounce" : ""
      } hover:outline duration-500 transition-transform fixed bottom-2 right-2 w-12 h-12 rounded-full text-lg flex items-center justify-center lg:hidden ${className}`}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
}
