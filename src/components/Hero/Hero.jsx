import React from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
    const {pathname} = useLocation();
  return (
    <div className={`max-w-7xl mx-auto hero bg-purple-600 text-white pb-56 pt-8 rounded-b-xl ${pathname === '/'? '' : 'rounded-t-xl'}`}>
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="py-6 text-gray-300">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="btn rounded-full">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
