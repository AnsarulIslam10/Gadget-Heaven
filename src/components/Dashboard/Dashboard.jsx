import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAddToCart } from '../../utils/addToDb';
import Cart from '../Cart/Cart';

const Dashboard = () => {
    const [cart, setCart] = useState([]);
    const [sort, setSort] = useState([]);
    const [count, setCount] = useState(0)
    const allProduct = useLoaderData();
    useEffect(()=>{
        const storedCart = getAddToCart();
        const storedCartInt = storedCart.map(id => parseInt(id));
        const cartList = allProduct.filter(product => storedCartInt.includes(product.product_id));
        setCart(cartList);
        setCount(cartList.length)
    },[])
    console.log(cart)
    return (
        <div className='max-w-7xl mx-auto'>
            {
                cart.map(c => <Cart key={c.product_id} cart={c}></Cart>)
            }
        </div>
    );
};

export default Dashboard;