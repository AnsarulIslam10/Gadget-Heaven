import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';

const Root = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className='min-h-[calc(100vh-589.34px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;