import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gedgets from "../Gedgets/Gedgets";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
// const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="text-center text-4xl font-bold mb-12">Explore Cutting-Edge Gadgets</h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 max-w-7xl mx-auto">
          <div className="col-span-3 bg-white p-8 mx-4 rounded-xl">
            <Categories ></Categories>
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
