import React from "react";
import { Helmet } from "react-helmet-async";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Area } from "recharts";
const data = [
  {
    product_id: 1,
    product_title: "Dell XPS 15",
    price: 1200,
  },
  {
    product_id: 2,
    product_title: "HP Spectre x360",
    price: 1050,
  },
  {
    product_id: 3,
    product_title: "Lenovo ThinkPad X1 Carbon",
    price: 1350,
  },
  {
    product_id: 4,
    product_title: "Acer Aspire 5",
    price: 500,
  },
  {
    product_id: 5,
    product_title: "ASUS ROG Zephyrus G14",
    price: 1500,
  },
  {
    product_id: 6,
    product_title: "Apple MacBook Pro 16",
    price: 2400,
  },
  {
    product_id: 7,
    product_title: "Samsung Galaxy S21",
    price: 799,
  },
  {
    product_id: 8,
    product_title: "Google Pixel 6",
    price: 699,
  },
  {
    product_id: 9,
    product_title: "Fitbit Charge 5",
    price: 179,
  },
  {
    product_id: 10,
    product_title: "Samsung Galaxy Watch 4",
    price: 249,
  },
  {
    product_id: 11,
    product_title: "Apple iPhone 13",
    price: 799,
  },
  {
    product_id: 12,
    product_title: "Apple iPhone 13 Pro",
    price: 999,
  },
];

const Statistics = () => {
  return (
    <div className=" max-w-7xl mx-auto mb-8">
      <h1 className="text-4xl mt-4 font-bold mb-4">Statistics</h1>
      <div className="flex justify-center mt-4 p-8 bg-white">
        <Helmet>
          <title>Statistics | Gadget Heaven</title>
        </Helmet>
        <BarChart
          width={1200}
          height={600}
          margin={{ bottom: 100 }}
          data={data}
        >
          <XAxis dataKey="product_title" angle={-30} textAnchor="end"></XAxis>
          <YAxis dataKey="price"></YAxis>
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
