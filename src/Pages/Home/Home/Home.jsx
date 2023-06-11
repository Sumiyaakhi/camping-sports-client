import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
             <Helmet> <title>Sports Camp | Home</title></Helmet>
            <TopSlider></TopSlider>
            
        </div>
    );
};

export default Home;