"use client";
import React, { useContext, useEffect, useState } from "react";

export const GlobalThemeContext = React.createContext<string>("light");

export const GlobalThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [Theme, setTheme] = useState<any>(null);

  useEffect(() => {
    let isDarkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    let theme = isDarkTheme ? "dark" : "light";

    document.documentElement.classList.add(theme);

    // Whenever the user explicitly chooses light mode
    localStorage.theme = theme;

    // Whenever the user explicitly chooses to respect the OS preference
    setTheme(theme);
  }, [Theme]);

  return (
    <GlobalThemeContext.Provider value={Theme}>
      {children}
    </GlobalThemeContext.Provider>
  );
};

export const useTheme = () => {
  const Theme = useContext<any>(GlobalThemeContext);

  if (!Theme) console.log("useTheme must be used inside a GlobalThemeProvider");

  return Theme;
};
