import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GedgetCard from '../GedgetCard/GedgetCard';

const Gedgets = () => {
    const products = useLoaderData()
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                products.products.map(product=> <GedgetCard key={product.id} product={product}></GedgetCard>)
            }
        </div>
    );
};

export default Gedgets;