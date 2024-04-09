"use client";
import { GlobalThemeProvider } from "@hooks/useTheme";

export default function Wrapper({ children }: { children?: React.ReactNode }) {
  return <GlobalThemeProvider>{children}</GlobalThemeProvider>;
}
