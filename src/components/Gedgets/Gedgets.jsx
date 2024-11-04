import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import GedgetCard from '../GedgetCard/GedgetCard';

const Gedgets = () => {
    const [gedgets, setGedgets] = useState([]);
    const data = useLoaderData()
    const { category } = useParams();
    useEffect(()=>{
        if(category){
            const categoryGedgets = data.filter((product)=> product.category === category);
            setGedgets(categoryGedgets); 
        }else{
            setGedgets(data);
        }
    },[data, category])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                gedgets?.map(product=> <GedgetCard key={product.product_id} product={product}></GedgetCard>)
            }
        </div>
    );
};

export default Gedgets;