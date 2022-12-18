import { Link } from "react-router-dom";

const NavLink = ({ className, to, children }) => {
  return (
      <li className={ `${ className } group flex w-full lg:w-fit text-sky-800 font-semibold hover:text-main bg-transparent hover:bg-sky-100 hover:rounded-md` }>
        <Link className="duration-1000 flex w-full bg-transparent group-hover:text-main group-hover:pl-2 lg:group-hover:pl-0 lg:group-hover:px-2" to={ to }>{ children }</Link>
      </li>
    )
}

export default NavLink;