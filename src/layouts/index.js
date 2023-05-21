import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import theme from "../utils/theme";
import Nav from "../partials/Nav";
import Preload from "../layouts/Preload";

const Layout = ({ childrens }) => {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    // todo
  }, [Loading]);

  return (
    <div
      className="relative flex flex-col min-h-screen w-screen"
      onLoad={theme}
    >
      {Loading ? <Preload /> : null}

      <Nav />
      <div className="w-full">
        <Outlet context={[SetLoading]} />
      </div>
    </div>
  );
};

export default Layout;
