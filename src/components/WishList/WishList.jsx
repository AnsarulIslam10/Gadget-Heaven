import React, { useEffect, useState } from "react";
import { getAddToWishList } from "../../utils/addToDb";
import { useLoaderData } from "react-router-dom";
import WishListItem from "../WishListItem/WishListItem";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const allProduct = useLoaderData();

  useEffect(() => {
    const storedWishList = getAddToWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishListItems = allProduct.filter((product) =>
      storedWishListInt.includes(product.product_id)
    );
    setWishList(wishListItems);
  }, [allProduct]);
  const handleRemoveWishItem = (id) =>{
    const updatedWish = wishList.filter(item => item.product_id !== id);
    setWishList(updatedWish);
    localStorage.setItem('wish-items', JSON.stringify(updatedWish));
  }
  
console.log(wishList.length)
  return (
    <div>
      {
        wishList.map(wish=> <WishListItem key={wish.product_id} wish={wish} handleRemoveWishItem={handleRemoveWishItem}></WishListItem>)
      }
    </div>
  );
};

export default WishList;
