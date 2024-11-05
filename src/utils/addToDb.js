import { toast } from 'react-toastify';
const getAddToCart = () =>{
    const storedCartStr = localStorage.getItem('cart-items')
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr)
        return storedCart;
    }else{
        return [];
    }
}

const addToCart=(id)=>{
    const storedCart = getAddToCart();
    if (storedCart.includes(id)) {
        console.log(id, 'already exist')
        toast.warning('Product Already Added')
    }else{
        storedCart.push(id);
        const storedCartStr =JSON.stringify(storedCart)
        localStorage.setItem('cart-items', storedCartStr)
        toast.success('Product Added To Cart')
    }
}

const getAddToWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-items')
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr)
        return storedWishList;
    }else{
        return [];
    }
}

const addToWishList=(id)=>{
    const storedWishList = getAddToWishList();
    if (storedWishList.includes(id)) {
        console.log(id, 'already exist')
    }else{
        storedWishList.push(id);
        const storedWishListStr =JSON.stringify(storedWishList)
        localStorage.setItem('wish-items', storedWishListStr)
        toast.success('Product Added To Wishlist')
    }
}

export {addToCart, addToWishList, getAddToCart, getAddToWishList}
