"use client";
import { useTheme, GlobalThemeProvider } from "@hooks/useTheme";

export default function Wrapper({ children }: { children?: React.ReactNode }) {
  const theme = useTheme();

  return <GlobalThemeProvider>{children}</GlobalThemeProvider>;
}
