import { useLocation, Link } from "react-router-dom";

export default function NavLink({ className, to, text = "", children }) {
  const request = (path) => {
    let location = useLocation();
    let { pathname } = location;

    return pathname === path;
  };

  return (
    <li
      className={`p-2 group flex w-full lg:w-auto font-semibold ${
        request(to) ? "nav-link-active" : "nav-link"
      } ${className}`}
    >
      <Link className="duration-1000 flex w-full bg-transparent" to={to}>
        {text || "#"}
      </Link>
    </li>
  );
}
