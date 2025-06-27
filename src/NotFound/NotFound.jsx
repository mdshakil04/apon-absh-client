import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=' flex flex-col items-center'>
            <h1 className=' text-5xl font-bold text-red-500 lg:mt-96 mb-8' >Opps! 404 Not Found!</h1>
            <NavLink className='btn btn-accent text-white font-bold' to='/'>Go Home</NavLink>
        </div>
    );
};

export default NotFound;