import Link from "next/link";
import { usePathname } from "next/navigation";
import { randomID } from "@utils/functions";

export default function NavLink({
  className = "",
  to,
  text = "",
  children,
}: {
  className?: string;
  to: string;
  text?: string | null;
  children?: React.ReactNode;
}) {
  const request = (path) => {
    let pathname = usePathname();

    return pathname === path;
  };

  return (
    <li
      className={`p-2 group flex w-full lg:w-auto font-semibold ${request(to) ? "nav-link-active" : "nav-link"
        } ${className}`}
      key={randomID()}
    >
      <Link
        className="hover:cursor-pointer duration-800 flex w-full bg-transparent"
        href={to || "#"}
      >
        {text || "#"}
      </Link>
    </li>
  );
}
