import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import GedgetCard from '../GedgetCard/GedgetCard';

const Gedgets = () => {
    const [product, setProduct] = useState([]);
    const products = useLoaderData()
    const {category} = useParams();
    useEffect(()=>{
        if (category) {
            const categoryProducts = products.filter((product) => product/category == category)
            setProduct(categoryProducts)
        }else{
            setProduct(products)
        }
    },[product, category])
    console.log(product)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                product.map(p=> <GedgetCard key={product.id} product={p}></GedgetCard>)
            }
        </div>
    );
};

export default Gedgets;