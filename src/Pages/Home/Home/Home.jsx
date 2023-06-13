import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import { Helmet } from 'react-helmet';
import Animation from '../Animation/Animation';
import PopularClasses from '../PopularClasses/PopularClasses';
import InstructorInfo from '../../InstructorInfo/InstructorInfo';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
             <Helmet> <title>Sports Camp | Home</title></Helmet>
           
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <InstructorInfo></InstructorInfo>
            <Animation></Animation>
        </div>
    );
};

export default Home;