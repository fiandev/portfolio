"use client";
import { useEffect, useState } from "react";
import { getBlobRadius } from "@utils/functions";

const Shapes = ({
  className,
  children,
}: {
  className?: string | null;
  children: React.ReactNode;
}) => {
  const [time, setTime] = useState<any>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  let border = getBlobRadius();
  let style = {
    borderRadius: border,
  };

  return (
    <div
      style={style}
      className={`transition-all duration-1000 delay-200 flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Shapes;
