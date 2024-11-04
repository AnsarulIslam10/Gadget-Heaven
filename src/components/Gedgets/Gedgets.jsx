import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import GedgetCard from '../GedgetCard/GedgetCard';

const Gedgets = () => {
    const products = useLoaderData()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                products.map(product=> <GedgetCard key={product.product_id} product={product}></GedgetCard>)
            }
        </div>
    );
};

export default Gedgets;