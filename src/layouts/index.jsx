import { Outlet } from "react-router";
// import { useEffect, useState } from "react";
import theme from "../utils/theme";
import Nav from "../partials/Nav";

const Layout = ({ childrens }) => {
  return (
    <div
      className="relative flex flex-col min-h-screen w-screen"
      onLoad={theme}
    >
      <Nav />
      <div className="w-full pt-10 md:pt-14 lg:pt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
