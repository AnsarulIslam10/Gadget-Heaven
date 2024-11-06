import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex flex-col gap-4 text-center">
      <NavLink
        className={({ isActive }) =>
          `border border-gray-300 rounded-xl py-2 ${
            isActive ? "bg-blue-400 text-white" : "bg-gray-200"
          }`
        }
        to={"/"}
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `border border-gray-300 rounded-xl py-2 ${
              isActive ? "bg-blue-400 text-white" : "bg-gray-200"
            }`
          }
          key={category.id}
          to={`/category/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
