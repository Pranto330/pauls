import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftsidenav = () => {
    const [categoris, setCategoris] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategoris(data))
    },[])
    return (
        <div className='space-y-10'>
            <h2 className="text-2xl">All Categoris</h2>
            {
                categoris.map(category =><Link 
                 className='block ml-4 text-xl font-semibold'   
                key={category.id}
                to={`/category/${category.id}`}>
                {category.name}</Link>)
            }
        </div>
    );
};

export default Leftsidenav;