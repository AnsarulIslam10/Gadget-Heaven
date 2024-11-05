import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAddToCart } from "../../utils/addToDb";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState([]);
  const [count, setCount] = useState(0);
  const allProduct = useLoaderData();
  useEffect(() => {
    const storedCart = getAddToCart();
    const storedCartInt = storedCart.map((id) => parseInt(id));
    const cartList = allProduct.filter((product) =>
      storedCartInt.includes(product.product_id)
    );
    setCart(cartList);
    setCount(cartList.length);
  }, []);

  return (
    <div>
      {cart.map((c) => (
        <CartItem key={c.product_id} cart={c}></CartItem>
      ))}
    </div>
  );
};

export default Cart;
