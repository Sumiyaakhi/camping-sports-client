import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useInstructor from '../Components/hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';

const InstructorRoute = () => {
    const {user, loading} = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()
    if(loading || isInstructorLoading){
        <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default InstructorRoute;