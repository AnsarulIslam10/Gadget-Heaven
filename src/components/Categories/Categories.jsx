import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='flex flex-col gap-2 text-center'>
            <Link className='px-4 py-2 bg-gray-100 font-semibold rounded-full text-black'>All Products</Link>
            <Link className='px-4 py-2 bg-gray-100 font-semibold rounded-full text-black'>Laptop</Link>
            <Link className='px-4 py-2 bg-gray-100 font-semibold rounded-full text-black'>Phone</Link>
            <Link className='px-4 py-2 bg-gray-100 font-semibold rounded-full text-black'>Smart Watch</Link>
            <Link className='px-4 py-2 bg-gray-100 font-semibold rounded-full text-black'>Iphone</Link>
        </div>
    );
};

export default Categories;