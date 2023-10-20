"use client";
import { useState, useEffect } from "react";

const styles = [
  "rounded-lg",
  "rotate-45",
  "rounded-2xl",
  "rotate-180",
  "animate-bounce",
];

export default function Preload({
  className,
  children,
}: {
  className?: string | null;
  children?: React.ReactNode;
}) {
  const [Index, SetIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      let index = Index + 1 > styles.length - 1 ? 0 : Index + 1;
      SetIndex(index);
    }, 500);
  }, [Index]);

  return (
    <div className="w-screen h-screen absolute inset-0 z-[999999] grid place-items-center bg-slate-50 dark:bg-slate-800 hover:cursor-wait">
      <div
        className={`transition-all origin-center duration-300 ${styles[Index]} flex justify-center items-center bg-main w-8 h-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
