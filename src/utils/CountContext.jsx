import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);
  const [wishListLength, setWishListLength] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart-items') || '[]');
    const storedWishList = JSON.parse(localStorage.getItem('wish-items') || '[]');
    
    setCartLength(storedCart.length);
    setWishListLength(storedWishList.length);
  }, []);

  return (
    <CartContext.Provider value={{ cartLength, wishListLength }}>
      {children}
    </CartContext.Provider>
  );
};
