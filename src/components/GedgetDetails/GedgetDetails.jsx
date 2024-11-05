import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import { addToCart, addToWishList } from "../../utils/addToDb";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { toast } from "react-toastify";
const GedgetDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const product = data.find((p) => p.product_id === id);

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

  const handleAddToCart = (id) => {
    addToCart(id);
    toast('cart')
  };
  const handleAddToWishList = (id) => {
    addToWishList(id);
    console.log('adding to wishlist', id)

  };

  return (
    <div className="hero bg-white relative -top-32 max-w-7xl mx-auto rounded-xl">
      <Helmet>
        <title>Product Details | Gedget Heaven</title>
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
          <button
            onClick={() => handleAddToCart(currentId)}
            className="btn btn-primary"
          >
            Add to Cart <IoCartOutline></IoCartOutline>
          </button>
          <button className="text-2xl p-4 bg-gray-100 rounded-full" onClick={() => handleAddToWishList(currentId)}>
            <IoHeartOutline></IoHeartOutline>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GedgetDetails;
