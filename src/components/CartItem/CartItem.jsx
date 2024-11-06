import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
const CartItem = ({ cart, handleRemoveCartItem }) => {
  const { product_id, product_title, product_image, price, description } = cart;
  return (
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
          </div>
        </div>
        <button
          onClick={() => handleRemoveCartItem(product_id)}
          className="text-5xl"
        >
          <IoCloseCircleOutline></IoCloseCircleOutline>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
