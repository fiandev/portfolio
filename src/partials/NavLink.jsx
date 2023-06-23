import { Link, useLocation } from "react-router-dom";

export default function NavLink({ className, to, text = "", children }) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <li
      className={`p-2 group flex w-full lg:w-auto font-semibold ${className}`}
    >
      <Link className="duration-1000 flex w-full bg-transparent" to={to}>
        {text || "#"}
      </Link>
    </li>
  );
}
