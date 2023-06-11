import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import useClasses from '../../Components/hooks/useClasses';

const Classes = () => {
    const [classes, loading] = useClasses();
    console.log(classes);
    
    
    return (
        <div className='md:ms-32 my-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ms-8'>
            {
               classes.map(singleClass =>
                <ClassesCard
                key={singleClass._id}
                singleClass={singleClass}
                ></ClassesCard>
                )
            }
        </div>
        </div>
    );
};

export default Classes;