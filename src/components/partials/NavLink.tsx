import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ className, to, text = "", children }) {
  const request = (path) => {
    let pathname = usePathname();

    return pathname === path;
  };

  return (
    <li
      className={`p-2 group flex w-full lg:w-auto font-semibold ${
        request(to) ? "nav-link-active" : "nav-link"
      } ${className}`}
    >
      <Link className="duration-1000 flex w-full bg-transparent" href={to}>
        {text || "#"}
      </Link>
    </li>
  );
}
