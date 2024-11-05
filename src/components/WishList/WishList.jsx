import React, { useEffect, useState } from "react";
import { getAddToWishList } from "../../utils/addToDb";
import { useLoaderData } from "react-router-dom";
import WishListItem from "../WishListItem/WishListItem";
import { toast } from "react-toastify";

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
    toast.success('Product Removed From Wishlist')
  }
  
console.log(wishList.length)
  return (
    <div className="mt-4">
      <h2 className="text-4xl font-bold">Wishlist</h2>
      {
        wishList.map(wish=> <WishListItem key={wish.product_id} wish={wish} handleRemoveWishItem={handleRemoveWishItem}></WishListItem>)
      }
    </div>
  );
};

export default WishList;
