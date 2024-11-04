import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Categories = ({categories}) => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/');
    }
    return (
        <div className='flex flex-col gap-2 text-center'>
           <NavLink><button onClick={handleNavigate}>All Product</button></NavLink>
           {
            categories.map(category => <NavLink key={category.id} to={`/category/${category.category}`}>{category.category}</NavLink>)
           }
        </div>
    );
};

export default Categories;