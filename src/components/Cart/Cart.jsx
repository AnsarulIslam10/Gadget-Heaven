import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { RiSortDesc } from "react-icons/ri";
import { getAddToCart } from "../../utils/addToDb";
import { toast } from "react-toastify";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const allProduct = useLoaderData();
  const navigate = useNavigate();
  const { setCartLength, setWishlistLength } = useOutletContext();

  useEffect(() => {
    const storedCart = getAddToCart();
    const storedCartInt = storedCart.map((id) => parseInt(id));
    const cartList = allProduct.filter((product) =>
      storedCartInt.includes(product.product_id)
    );
    setCart(cartList);
    setCartLength(cartList.length);
  }, []);

  const handleSortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const handleModalClose = () => {
    setCart([]);
    localStorage.clear();
    navigate("/");
    setCartLength(0);
    setWishlistLength(0);
  };
  const totalCost = cart.reduce((a, b) => a + b.price, 0);
  console.log(cart.length);
  const handleRemoveCartItem = (id) => {
    const updatedCart = cart.filter((item) => item.product_id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart-items", JSON.stringify(updatedCart));
    setCartLength(updatedCart.length);
    toast.success("Product Removed From Cart");
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h2 className="md:text-4xl text-xl sm:text-2xl font-bold">Cart</h2>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <h3 className="md:text-lg text-sm sm:font-semibold md:font-bold">Total Cost: ${totalCost}</h3>
          <button
            onClick={handleSortByPrice}
            className="btn btn-sm md:btn-md text-sm btn-ghost border-2 border-purple-500 rounded-full font-medium md:font-bold text-purple-500"
          >
            Sort By Price <RiSortDesc className="sm:text-xl" />
          </button>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn bg-purple-500 btn-sm md:btn-md text-sm rounded-full font-medium text-white"
            disabled={cart.length === 0 || totalCost === 0}
          >
            Perchase
          </button>
        </div>
      </div>
      <div>
        {cart.map((c) => (
          <CartItem
            key={c.product_id}
            cart={c}
            handleRemoveCartItem={handleRemoveCartItem}
          ></CartItem>
        ))}
      </div>

      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex flex-col items-center">
            <img
              className="mb-2"
              src="https://i.ibb.co.com/kSJ5z0f/Group.png"
              alt=""
            />
            <h3 className="font-bold text-2xl">Payment Successfully</h3>
            <p className="py-2">Thanks for purchasing.</p>
            <p className="font-bold">Total:{totalCost}</p>
          </div>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              <button onClick={handleModalClose} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
