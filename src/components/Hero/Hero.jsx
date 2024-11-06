import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Heading from "../Heading/Heading";

const Hero = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleShopNowbtn = () => {
    navigate("/dashboard");
  };
  return (
    <div
      className={` mx-auto hero bg-purple-600 text-white  pt-8 ${
        pathname === "/" ||
        pathname === "/category/Laptop" ||
        pathname === "/category/iPhone" ||
        pathname === "/category/Phone" ||
        pathname === "/category/Smart%20Watches" ||
        pathname === "/category/Computers" ||
        pathname === "/category/Chargers" ||
        pathname === "/category/Power%20Banks"
          ? "max-w-7xl pb-56 rounded-b-xl"
          : "w-full pb-24"
      }`}
    >
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          {pathname === "/" ||
          pathname === "/category/Laptop" ||
          pathname === "/category/iPhone" ||
          pathname === "/category/Phone" ||
          pathname === "/category/Smart%20Watches" ||
          pathname === "/category/Computers" ||
          pathname === "/category/Chargers" ||
          pathname === "/category/Power%20Banks" ? (
            <Heading
              title={
                "Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
              }
            ></Heading>
          ) : pathname === "/statistics" ? (
            <Heading title={"Statistics"}></Heading>
          ) : pathname === "/dashboard" ||
            pathname === "/dashboard/cart" ||
            pathname === "/dashboard/wishlist" ? (
            <Heading title={"Dashboard"}></Heading>
          ) : pathname === "/faq" ? (
            <Heading title={"FAQ"}></Heading>
          ) : (
            <Heading title={"Product Details"}></Heading>
          )}
          <p className="py-6 text-gray-300">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <>
            {pathname === "/" ||
            pathname === "/category/Laptop" ||
            pathname === "/category/iPhone" ||
            pathname === "/category/Phone" ||
            pathname === "/category/Smart%20Watches" ||
            pathname === "/category/Computers" ||
            pathname === "/category/Chargers" ||
            pathname === "/category/Power%20Banks" ? (
              <button onClick={handleShopNowbtn} className="btn rounded-full">
                Shop Now
              </button>
            ) : pathname === "/dashboard" ||
              pathname === "/dashboard/cart" ||
              pathname === "/dashboard/wishlist" ? (
              <>
                <NavLink
                  to={"/dashboard/cart"}
                  className={({ isActive }) =>
                    `btn btn-outline font-bold mr-2 rounded-full ${
                      isActive || pathname === "/dashboard"
                        ? "bg-white border-none text-black"
                        : ""
                    }`
                  }
                >
                  Cart
                </NavLink>
                <NavLink
                  to={"/dashboard/wishlist"}
                  className={({ isActive }) =>
                    `btn btn-outline font-bold rounded-full ${
                      isActive ? "bg-white border-none text-black" : ""
                    }`
                  }
                >
                  Wishlist
                </NavLink>
              </>
            ) : (
              ""
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Hero;
