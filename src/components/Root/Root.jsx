import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import { getAddToCart } from "../../utils/addToDb";
import { ToastContainer } from "react-toastify";
const Root = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="min-h-[calc(100vh-589.34px)]">
        <Outlet></Outlet>
      {/* <ToastContainer /> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
