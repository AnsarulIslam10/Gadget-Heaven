import React from 'react';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <div className='grid grid-cols-12 max-w-7xl mx-auto'>
                <div className='col-span-3 bg-white p-8 mx-4 rounded-xl'>
                    <Categories></Categories>
                </div>
                <div className='col-span-9'>
                    <h1>Hi</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;