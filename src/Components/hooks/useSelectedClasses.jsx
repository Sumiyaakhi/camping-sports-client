import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
    const {user,loading} = useContext(AuthContext)
   
//   const [selectedClasses, setSelectedClasses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     fetch("http://localhost:5000/selectedclasses")
//       .then(res => res.json())
//       .then((data) => {
//         console.log(data);
//         setSelectedClasses(data);
//         setLoading(false);
//       });
//   }, []);

const token = localStorage.getItem('access-token')
const [axiosSecure] = useAxiosSecure()
const {refetch, data: selectedClasses= []} = useQuery({
    queryKey: ['selectedClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
        const res = await  axiosSecure(`http://localhost:5000/selectedclasses?email=${user?.email}`)
        console.log(res.data);
        return res.data;
    }
})

  return [selectedClasses, refetch];
};
export default useSelectedClasses;
