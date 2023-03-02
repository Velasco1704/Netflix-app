import { SiNetflix } from "react-icons/si";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-black w-full h-[10vh] text-md flex items-center justify-between fixed top-0">
      <NavLink to="/">
        <SiNetflix className="text-red-600 text-4xl ml-7" />
      </NavLink>
      <div className="mx-5 flex items-center justify-center gap-5">
        <NavLink to="/">
          {({ isActive }) => (
            <span className={`${isActive ? "text-red-500" : "text-white"}`}>
              HOME
            </span>
          )}
        </NavLink>
        <NavLink to="/movies">
          {({ isActive }) => (
            <span className={isActive ? "text-red-500" : "text-white"}>
              MOVIES
            </span>
          )}
        </NavLink>
        <NavLink to="/shows">
          {({ isActive }) => (
            <span className={isActive ? "text-red-500" : "text-white"}>
              SHOWS
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
