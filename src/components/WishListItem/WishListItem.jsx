import React from "react";
import { IoCloseCircleOutline, IoCartOutline } from "react-icons/io5";
import { addToCart, getAddToCart } from "../../utils/addToDb";
import { useOutletContext } from "react-router-dom";
const WishListItem = ({ wish, handleRemoveWishItem }) => {
  const { setCartLength } = useOutletContext();
  const { product_id, product_title, description, price, product_image } = wish;
  console.log(product_title);

  const handleAddToCart = (id) => {
    addToCart(id);
    const cart = getAddToCart();
    const newCartLength = cart.length;
    setCartLength(newCartLength);
  };
  return (
    <div>
      <div>
        <div className="flex justify-between bg-white mb-2 p-6 mt-8 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="border rounded-xl bg-gray-200">
              <img
                src={product_image}
                alt=""
                className="w-60 h-32 object-cover"
              />
            </div>
            <div className=" space-y-2">
              <h2 className="text-xl font-bold">{product_title}</h2>
              <p className="text-gray-500">{description}</p>
              <p>
                <span className="font-semibold">Price:</span> ${price}
              </p>
              <button
              onClick={() => {handleAddToCart(product_id); handleRemoveWishItem(product_id)}}
              className="btn btn-primary hover:bg-purple-400"
            >
              Add to Cart <IoCartOutline className="text-3xl"></IoCartOutline>
            </button>
            </div>
            
          </div>
          <button
            onClick={() => handleRemoveWishItem(product_id)}
            className="text-5xl"
          >
            <IoCloseCircleOutline></IoCloseCircleOutline>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
