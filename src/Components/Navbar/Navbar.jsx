import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);
  const handleLogOut = () => {
    logOut();
  };

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className={isActiveRoute("/") ? "active" : ""} to="/">
                  Home
                </Link>
              </li>
              <li tabIndex={0}>
                <Link
                  to="/blog"
                  className={isActiveRoute("/blog") ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link className={isActiveRoute("/dekhajak") ? "active" : ""}>
                  Item 3
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className="text-3xl font-semibold font-serif underline hover:text-blue-500"
            to="/"
          >
            Toy mania
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className={isActiveRoute("/") ? "active" : ""} to="/">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link
                to="/blog"
                className={isActiveRoute("/blog") ? "active" : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link className={isActiveRoute("/dekhajak") ? "active" : ""}>
                Item 3
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div>
              <div className="avatar mt-2">
                <div className="w-8  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                    />
                  ) : (
                    <img src="https://i.ibb.co/zRCMzv0/download.jpg" alt="" />
                  )}
                </div>
              </div>
              <Link
                onClick={handleLogOut}
                className="inline-block rounded-ful mx-2 bg-gradient-to-r from-teal-400 via-blue-500-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              >
                <span className="block rounded-full  bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                  LogOut
                </span>
              </Link>
            </div>
          ) : (
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                to="/login"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  to="/signup"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
