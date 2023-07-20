"use client";
import React, { useContext, useEffect, useState } from "react";

const GlobalThemeContext = React.createContext<any>(null);

export const GlobalThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<any>(null);

  useEffect(() => {
    let isDarkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
    setTheme(isDarkTheme ? "dark" : "light");
  }, [setTheme, theme]);

  return (
    <div>
      <GlobalThemeContext.Provider value={theme}>
        {children}
      </GlobalThemeContext.Provider>
    </div>
  );
};

export const useTheme = () => {
  const theme = useContext<any>(GlobalThemeContext);
  
  if (!theme) console.log("useTheme must be used inside a GlobalThemeProvider");

  return theme;
};
