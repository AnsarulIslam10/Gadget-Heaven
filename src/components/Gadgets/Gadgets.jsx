import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../GadgetCard/GadgetCard";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();
  useEffect(() => {
    if (category) {
      const categoryGadgets = data.filter(
        (product) => product.category === category
      );
      setGadgets(categoryGadgets);
    } else {
      setGadgets(data);
    }
  }, [data, category]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {gadgets?.map((product) => (
        <GadgetCard key={product.product_id} product={product}></GadgetCard>
      ))}
    </div>
  );
};

export default Gadgets;
