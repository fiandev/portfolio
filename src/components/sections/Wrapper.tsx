"use client";
import { useTheme } from "@hooks/useTheme";

export default function Wrapper({ children }: { children?: React.ReactNode }) {
  const theme = useTheme();

  return <div className="w-full">{children}</div>;
}
