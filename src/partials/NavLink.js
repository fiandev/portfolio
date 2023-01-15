import { Link } from "react-router-dom";

export default function NavLink ({ className, to, children }) {
  return (
      <li className={ `${ className } group flex w-full lg:w-auto text-sky-800 font-semibold hover:text-main bg-transparent hover:bg-sky-100 hover:rounded-md` }>
        <Link className="duration-1000 flex w-full bg-transparent group-hover:text-main" to={ to }>{ children }</Link>
      </li>
    )
}