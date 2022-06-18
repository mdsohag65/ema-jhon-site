import React from 'react';
import './Home.css';
import homePic from '../../images/homePic.avif';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={homePic} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='mr-8'>
                    <h1 className="text-5xl font-bold">New Collections For Fall</h1>
                    <p className=" text-2xl py-6">Discover all the new arrivals of ready-to-wear collection.</p>
                    <Link to="shop"><button className="text-2xl shop-btn mt-8">SHOP NOW</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;