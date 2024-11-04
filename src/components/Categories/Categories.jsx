import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

 useEffect(()=>{
    fetch('/categories.json')
    .then(res=>res.json())
    .then(data=> setCategories(data))
 },[])
    
    return (
        <div className='flex flex-col gap-2 text-center'>
           <NavLink to={'/'}>All Products</NavLink>
           {
            categories.map(category => <NavLink key={category.category_id} to={`/category/${category.category}`}>{category.category}</NavLink>)
           }
        </div>
    );
};

export default Categories;