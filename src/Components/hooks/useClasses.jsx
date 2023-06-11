import React, { useEffect, useState } from 'react';

const useClasses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
 fetch('http://localhost:5000/classes')
 .then(res => res.json())
 .then(data => {
    // console.log(data);
    setClasses(data);
    setLoading(false);
 })
    },[])
    return [classes, loading]
};
export default useClasses;