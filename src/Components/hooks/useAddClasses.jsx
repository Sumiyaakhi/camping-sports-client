import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAddClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
const {refetch, data: addClasses= []} = useQuery({
    queryKey: ['addClass', user?.email],
    enabled: !loading,
    queryFn: async () => {
        const res = await  axiosSecure(`http://localhost:5000/instructor/addClass?email=${user?.email}`)
        console.log(res.data);
        return res.data;
    }
})
    return [addClasses, refetch]
};

export default useAddClasses;