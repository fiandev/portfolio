"use client";
import React, { useContext, useEffect, useState } from "react";

export const GlobalThemeContext = React.createContext<string>("light");

export const GlobalThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [Theme, changeTheme] = useState<any>(null);

  useEffect(() => {
    let isDarkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    let theme = isDarkTheme ? "dark" : "light";

    document.documentElement.setAttribute("class", "")
    document.documentElement.classList.add(theme);

    // Whenever the user explicitly chooses light mode
    localStorage.theme = theme;
    changeTheme(theme);

    // let tick = setInterval(() => {
    //   let isDarkTheme = localStorage.theme === "dark";
    //   let theme = isDarkTheme ? "dark" : "light"
    //   setTheme(theme)
    //   changeTheme(theme)
    // }, 10)

    return () => {
      // clearInterval(tick);
    }
  }, [Theme]);

  return (
    <GlobalThemeContext.Provider value={Theme}>
      {children}
    </GlobalThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext<any>(GlobalThemeContext);

  return theme;
};
