import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data=> {
            setLoading(true)
            console.log(data);
            setClasses(data);
            setLoading(false)
        })
    },[])
    return (
        <div className='md:ms-32 my-8'>
            <div className='md:grid grid-cols-3 gap-4 '>
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