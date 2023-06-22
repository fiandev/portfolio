import { Link, useLocation } from "react-router-dom";

export default function NavLink({ className, to, text = "", children }) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <li
      className={`p-2 ${className} group flex w-full lg:w-auto font-semibold`}
    >
      <Link
        className="duration-1000 flex w-full bg-transparent group-hover:text-main"
        to={to}
      >
        {text || "#"}
      </Link>
    </li>
  );
}
