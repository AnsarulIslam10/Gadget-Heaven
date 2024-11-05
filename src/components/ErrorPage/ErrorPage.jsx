import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-white flex flex-col items-center justify-center min-h-screen space-y-4'>
            <h1 className='text-7xl font-bold text-red-500'>404</h1>
            <p className='text-4xl font-semibold'>Page Not Found</p>
            <p className='text-lg text-gray-600'>The page you are looking for does'nt exist or have been moved</p>
            <Link to={'/'} className='btn bg-purple-500 text-white font-bold'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;