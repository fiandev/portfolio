import { Outlet } from "react-router";
import theme from "../utils/theme";
import Nav from "../partials/Nav";

const Layout = ({ childrens }) => {
  return (
    <div className="min-h-screen" onLoad={theme}>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
