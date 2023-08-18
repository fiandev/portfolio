"use client";
import { useTheme } from "@hooks/useTheme";

import Preload from "@components/partials/Preload";

export default function Wrapper({ children }: { children?: React.ReactNode }) {
  const theme = useTheme();
 

  return (
    <div className="w-full">
      {children}
    </div>
  );
}
