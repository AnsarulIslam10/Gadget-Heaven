import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

const Navbar = ({ cartLength, wishlistLength }) => {
  const { pathname } = useLocation();

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/faq"}>FAQ</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar rounded-t-xl max-w-7xl pt-4 mx-auto px-8 ${
        pathname === "/" ||
        pathname === "/category/Laptop" ||
        pathname === "/category/iPhone" ||
        pathname === "/category/Phone" ||
        pathname === "/category/Computers" ||
        pathname === "/category/Chargers" ||
        pathname === "/category/Power%20Banks" ||
        pathname === "/category/Smart%20Watches"
          ? "bg-purple-600"
          : "bg-[##F7F7F7]"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a  className={`text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold ${
        pathname === "/" ||
        pathname === "/category/Laptop" ||
        pathname === "/category/iPhone" ||
        pathname === "/category/Phone" ||
        pathname === "/category/Computers" ||
        pathname === "/category/Chargers" ||
        pathname === "/category/Power%20Banks" ||
        pathname === "/category/Smart%20Watches"
          ? "text-white"
          : "text-black"
      }`}>Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul  className={`menu menu-horizontal px-1 md:text-lg md:font-medium gap-3 ${
        pathname === "/" ||
        pathname === "/category/Laptop" ||
        pathname === "/category/iPhone" ||
        pathname === "/category/Phone" ||
        pathname === "/category/Computers" ||
        pathname === "/category/Chargers" ||
        pathname === "/category/Power%20Banks" ||
        pathname === "/category/Smart%20Watches"
          ? "text-white"
          : "text-black"
      }`}>
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="p-2 text-xl sm:text-2xl md:text-3xl bg-white rounded-full flex items-center">
          <IoCartOutline />
          <div className="badge mb-4 bg-purple-600 text-white py-3 badge-sm">{cartLength}</div>
        </div>
        <div className="p-2 text-xl sm:text-2xl md:text-3xl bg-white rounded-full flex items-center">
          <IoHeartOutline />
          <div className="badge mb-4 bg-purple-600 text-white py-3 badge-sm">{wishlistLength}</div>  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
