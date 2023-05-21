import { useState, useEffect } from "react";

const styles = [
  "rounded-lg",
  "rotate-45",
  "rounded-2xl",
  "rotate-180",
  "animate-bounce",
];

export default function Preload({ className, children }) {
  const [Index, SetIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let index = Index + 1 > styles.length - 1 ? 0 : Index + 1;
      SetIndex(index);
    }, 500);
  }, [Index]);

  return (
    <div className="w-screen h-screen absolute inset-0 z-[999] grid place-items-center bg-slate-50">
      <div
        className={`transition-all origin-center duration-500 ${styles[Index]} flex justify-center items-center bg-main w-8 h-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
