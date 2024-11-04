import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Categories = ({categories}) => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/');
    }
    return (
        <div className='flex flex-col gap-2 text-center'>
           
        </div>
    );
};

export default Categories;