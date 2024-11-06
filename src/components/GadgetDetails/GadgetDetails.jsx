import React, { useState } from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import {
  addToCart,
  addToWishList,
  getAddToCart,
  getAddToWishList,
} from "../../utils/addToDb";
import { Helmet } from "react-helmet-async";

const GadgetDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const product = data.find((p) => p.product_id === id);
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    product_id: currentId,
    product_title,
    product_image,
    price,
    rating,
    specification,
    description,
    availability,
  } = product;

  const { setCartLength, setWishlistLength } = useOutletContext();
  const handleAddToCart = (id) => {
    addToCart(id);
    const cart = getAddToCart();
    const newCartLength = cart.length;
    setCartLength(newCartLength);
  };
  const handleAddToWishList = (id) => {
    addToWishList(id);
    setIsDisabled(true);
    const wish = getAddToWishList();
    const newWishlistLength = wish.length;
    setWishlistLength(newWishlistLength);
  };

  return (
    <div className="hero bg-white relative -top-32 max-w-7xl mx-auto rounded-xl">
      <Helmet>
        <title>Product Details | Gadget Heaven</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={product_image}
          className="max-w-sm rounded-lg border p-6 m-8"
        />
        <div>
          <h1 className="text-3xl font-bold">{product_title}</h1>
          <p>
            <span className="font-bold">Price:</span> {price}
          </p>
          {availability ? (
            <p className="px-2 py-1 border border-green-500 inline-block rounded-xl text-green-500">
              In stock
            </p>
          ) : (
            <p className="px-2 py-1 border border-green-500 inline-block rounded-xl text-green-500">
              Out of Stock
            </p>
          )}
          <p className="py-2 text-gray-500">{description}</p>
          <h3 className="font-bold text-lg">Specification:</h3>
          <ul className=" list-decimal ml-7 text-gray-500 mb-2">
            {specification.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
          <p id="rating" className="font-bold">
            Rating:
          </p>
          <div className="flex items-center gap-2 mb-2">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              activeColor={"#ffd700"}
            ></ReactStars>
            <p className="p-2 bg-gray-200 rounded-xl">{rating}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleAddToCart(currentId)}
              className="btn btn-primary hover:bg-purple-400"
            >
              Add to Cart <IoCartOutline className="text-3xl"></IoCartOutline>
            </button>
            <button
              onClick={() => handleAddToWishList(currentId)}
              className={`text-2xl p-4 bg-gray-100 rounded-full ${
                isDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              disabled={isDisabled}
            >
              <IoHeartOutline></IoHeartOutline>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
