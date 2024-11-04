import React from "react";
import { useLocation } from "react-router-dom";
import Heading from "../Heading/Heading";

const Hero = () => {
    const {pathname} = useLocation();
  return (
    <div className={` mx-auto hero bg-purple-600 text-white pb-56 pt-8 ${pathname === '/'? 'max-w-7xl rounded-b-xl' : 'w-full'}`}>
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          {pathname === '/'? (
              <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}></Heading>
          ) : pathname === '/statistics'? (
            <Heading title={'Statistics'} ></Heading>
          ) : pathname === '/dashboard' ? (
            <Heading title={'Dashboard'}></Heading>
          ) : ''}
          <p className="py-6 text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          <button className="btn rounded-full">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
