import React, { useEffect, useState } from "react";
import { getAddToWishList } from "../../utils/addToDb";
import { useLoaderData, useOutletContext } from "react-router-dom";
import WishListItem from "../WishListItem/WishListItem";
import { toast } from "react-toastify";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const allProduct = useLoaderData();
  const { setWishlistLength } = useOutletContext();
  useEffect(() => {
    const storedWishList = getAddToWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishListItems = allProduct.filter((product) =>
      storedWishListInt.includes(product.product_id)
    );
    setWishList(wishListItems);
    setWishlistLength(wishListItems.length);
  }, [allProduct]);
  const handleRemoveWishItem = (id) => {
    const updatedWish = wishList.filter((item) => item.product_id !== id);
    setWishList(updatedWish);
    localStorage.setItem("wish-items", JSON.stringify(updatedWish));
    setWishlistLength(updatedWish.length);
    toast.success("Product Removed From Wishlist");
  };

  return (
    <div className="mt-4">
      <h2 className="md:text-4xl text-xl sm:text-2xl font-bold">Wishlist</h2>
      {wishList.map((wish) => (
        <WishListItem
          key={wish.product_id}
          wish={wish}
          handleRemoveWishItem={handleRemoveWishItem}
        ></WishListItem>
      ))}
    </div>
  );
};

export default WishList;
