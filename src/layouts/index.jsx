import { Outlet } from "react-router";
import theme from "../utils/theme";
import Nav from "../partials/Nav";
import ScrollToTop from "../partials/ScrollToTop";

const Layout = () => {
  return (
    <div
      className="relative flex flex-col min-h-screen w-screen"
      onLoad={theme}
    >
      <Nav />
      <div className="w-full pt-10 md:pt-14 lg:pt-10">
        <Outlet />
        <ScrollToTop className="bg-main text-slate-800 dark:bg-slate-800 dark:text-main" />
      </div>
    </div>
  );
};

export default Layout;
