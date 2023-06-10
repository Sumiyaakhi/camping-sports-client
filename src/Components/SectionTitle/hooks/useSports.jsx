import React, { useEffect, useState } from 'react';

const useSports = () => {
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
 fetch('sports.json')
 .then(res => res.json())
 .then(data => {
    // console.log(data);
    setSports(data);
    setLoading(false);
 })
    },[])
    return [sports, loading]
};

export default useSports;