import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import theme from "../utils/theme";
import Nav from "../partials/Nav";
import Preload from "../layouts/Preload";

const Layout = ({ childrens }) => {
  const [Loading, SetLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      SetLoading(!Loading);
    }, 2000);
  }, [])
  
  return Loading ?
    <Preload />
  : (
    <div className="relative flex flex-col min-h-screen w-screen" onLoad={theme}>
      <Nav />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
