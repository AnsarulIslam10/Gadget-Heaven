import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gedgets from "../Gedgets/Gedgets";
import { Outlet, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Home = () => {
  // const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home | Gedget Heaven</title>
      </Helmet>
      <Banner></Banner>
      <div>
        <h2 className="text-center text-4xl font-bold mb-12">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 max-w-7xl mx-auto mb-24">
          <div className="col-span-3 h-[335px] bg-white p-8 mx-4 rounded-xl">
            <Categories></Categories>
          </div>
          <div className="col-span-9">
            <Gedgets></Gedgets>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
