import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="px-2 text-white font-semibold h-10 flex justify-between flex-wrap content-center shadow-2xl ">
      <div>
        <Link to={"/"}>Logo</Link>
      </div>
      <ul className=" flex flex-wrap justify-between gap-3">
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `${isActive ? "text-red-600" : "text-white"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>Blog</li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `${isActive ? "text-red-600" : "text-white"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button>Login</button>
    </div>
  );
}

export default Header;
