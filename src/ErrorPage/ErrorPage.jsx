import React from 'react';
import img from '../assets/404_page_cover.jpg'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Link to='/'><button className="btn btn-lg text-green-600">
 <FaArrowLeft></FaArrowLeft>
 Back to homepage
</button></Link>
<img className='w-screen' src={img} alt="" />
        </div>
    );
};

export default ErrorPage;