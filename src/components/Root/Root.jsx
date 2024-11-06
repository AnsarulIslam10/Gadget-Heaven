import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const [cartLength, setCartLength] = useState(
    Number(localStorage.getItem("cartLength")) || 0
  );
  const [wishlistLength, setWishlistLength] = useState(
    Number(localStorage.getItem("wishlistLength")) || 0
  );

  useEffect(() => {
    localStorage.setItem("cartLength", cartLength);
    localStorage.setItem("wishlistLength", wishlistLength);
  }, [cartLength, wishlistLength]);
  return (
    <div>
      <Navbar cartLength={cartLength} wishlistLength={wishlistLength}></Navbar>
      <Hero></Hero>
      <div className="min-h-[calc(100vh-589.34px)] px-4">
        <Outlet context={{ setCartLength, setWishlistLength }}></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
