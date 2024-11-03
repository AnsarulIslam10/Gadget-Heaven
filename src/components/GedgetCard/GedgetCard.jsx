import React from "react";

const GedgetCard = ({ product }) => {
  const {price, product_title, product_image} = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4 ">
        <img
          src={product_image}
          alt=""
          className="rounded-xl w-72 h-44 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GedgetCard;
