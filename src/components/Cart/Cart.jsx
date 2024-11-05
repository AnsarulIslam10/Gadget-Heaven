import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate} from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { RiSortDesc } from "react-icons/ri";
import { getAddToCart } from "../../utils/addToDb";
import { toast } from "react-toastify";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const allProduct = useLoaderData();
  const navigate = useNavigate()

  useEffect(() => {
    const storedCart = getAddToCart();
    const storedCartInt = storedCart.map((id) => parseInt(id));
    const cartList = allProduct.filter((product) =>
      storedCartInt.includes(product.product_id)
    );
    setCart(cartList);

  }, []);

  const handleSortByPrice=()=>{
    const sortedCart = [...cart].sort((a,b) => b.price - a.price);
    setCart(sortedCart)
   
  }

  const handleModalClose =()=>{
    setCart([]);
    localStorage.clear();
    navigate('/')
  }
  const totalCost = cart.reduce((a,b) => a + b.price, 0)
  console.log(cart.length)
  const handleRemoveCartItem = (id) =>{
    const updatedCart = cart.filter(item => item.product_id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart-items', JSON.stringify(updatedCart));
    toast.success("Product Removed From Cart")
  }
  return (
    <div>
      <div className="flex justify-between mt-4">
        <div>
          <h2 className="text-4xl font-bold">Cart</h2>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">Total Cost: ${totalCost}</h3>
          <button onClick={handleSortByPrice} className="btn btn-ghost border-4 border-purple-500 rounded-full font-bold text-purple-500">
            Sort By Price <RiSortDesc className="text-xl" />
          </button>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn bg-purple-500 rounded-full text-white"
          disabled={cart.length === 0 || totalCost === 0} >
            Perchase
          </button>
        </div>
      </div>
      <div>
        {cart.map((c) => (
          <CartItem key={c.product_id} cart={c} handleRemoveCartItem={handleRemoveCartItem}></CartItem>
        ))}
      </div>

      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex flex-col items-center">
          <img className="mb-2" src="https://i.ibb.co.com/kSJ5z0f/Group.png" alt="" />
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <p className="py-2">
          Thanks for purchasing.
          </p>
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
