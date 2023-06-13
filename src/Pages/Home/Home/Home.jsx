import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import { Helmet } from 'react-helmet';
import Animation from '../Animation/Animation';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
             <Helmet> <title>Sports Camp | Home</title></Helmet>
             
            <TopSlider></TopSlider>
            <Animation></Animation>
        </div>
    );
};

export default Home;