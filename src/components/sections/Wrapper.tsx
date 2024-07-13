"use client";
import { useState, useEffect } from "react";
import { GlobalThemeProvider } from "@hooks/useTheme";
import Preload from "../partials/Preload";

export default function Wrapper({ children }: { children?: React.ReactNode }) {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!isLoading)
    },  1500);
  }, []);

  return isLoading ? <Preload/> : <GlobalThemeProvider>{children}</GlobalThemeProvider>;
}
