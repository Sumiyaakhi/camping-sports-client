import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const useClasses = () => {
    const {user}= useContext(AuthContext)
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
 fetch('http://localhost:5000/classes')
 .then(res => res.json())
 .then(data => {
    console.log(data);
    setClasses(data);
    setLoading(false);
 })
    },[])
    return [classes, loading]
};
export default useClasses;