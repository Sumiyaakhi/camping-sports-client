import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import { Helmet } from 'react-helmet';
import Animation from '../Animation/Animation';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
             <Helmet> <title>Sports Camp | Home</title></Helmet>
             
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <Animation></Animation>
        </div>
    );
};

export default Home;