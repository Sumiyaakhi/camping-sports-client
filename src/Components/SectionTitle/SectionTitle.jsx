import React from 'react';

const SectionTItle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-6 font-serif uppercase'>
            <h2 className='text-5xl mb-3 text-blue-300  font-bold '>{heading}</h2>
            <p className='text-xl font-bold mb-3 border-y-4 py-4'>{subHeading}</p>
        </div>
    );
};

export default SectionTItle;