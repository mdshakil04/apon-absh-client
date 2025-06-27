import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from './Hero/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;