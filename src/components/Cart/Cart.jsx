import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate} from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { RiSortDesc } from "react-icons/ri";
import { getAddToCart } from "../../utils/addToDb";
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
          >
            Perchase
          </button>
        </div>
      </div>
      <div>
        {cart.map((c) => (
          <CartItem key={c.product_id} cart={c}></CartItem>
        ))}
      </div>

      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
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
