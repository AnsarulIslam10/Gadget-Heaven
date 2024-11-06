import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>
      <Banner></Banner>
      <div>
        <h2 className="text-center text-4xl font-bold mb-12">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 max-w-7xl mx-auto mb-24">
          <div className="col-span-3 sm:h-[470px] lg:h-[520px] bg-white p-2 lg:p-8 mx-4 rounded-xl">
            <Categories></Categories>
          </div>
          <div className="col-span-9">
            <Gadgets></Gadgets>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
