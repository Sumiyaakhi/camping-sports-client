import React, { useEffect, useState } from 'react';

const useInstructorInfo = () => {
    const [instructorsInfo, setInstructorsInfo] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data=> setInstructorsInfo(data));
        
    },[])
    return [instructorsInfo, loading]
};

export default useInstructorInfo;