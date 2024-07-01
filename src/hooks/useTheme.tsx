"use client";
import React, { useContext, useEffect, useState } from "react";

export const GlobalThemeContext = React.createContext<any>("dark");

export const GlobalThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [Theme, changeTheme] = useState<any>();

  useEffect(() => {
    changeTheme(localStorage.theme || "dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("class", "")
    document.documentElement.classList.add(Theme);

    localStorage.theme = Theme;

    return () => {
      // clearInterval(tick);
    }
  }, [Theme]);
  let data = [Theme, changeTheme];

  return (
    <GlobalThemeContext.Provider value={data}>
      {children}
    </GlobalThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext<any>(GlobalThemeContext);
};
