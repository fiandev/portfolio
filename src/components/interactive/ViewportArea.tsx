"use client";
import { useRef, useState, useEffect } from "react";
import { randomID } from "@utils/functions";

const animates = ["animate-fadeInRight", "animate-fadeInLeft"];
export default function ViewportArea({ specialKey, children, className }: {
  specialKey: string | number | null
  children: React.ReactNode
  className: string | null
}) {
  const [Show, SetShow] = useState<boolean>(false);
  const element = useRef<any>();

  const isInViewport = (e) => {
    const rect = e.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const scrollHandler = (_) => {
    if (Show) return;
    SetShow(isInViewport(element.current));
  };

  const animate = animates[Math.floor(Math.random() * animates.length)];

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [Show]);

  return (
    <div
      key={specialKey || randomID()}
      ref={element}
      className={`w-full ${className} ${Show ? `${animate}` : ""}`}
    >
      {Show && children}
    </div>
  );
}
