import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Components/hooks/useAxiosSecure';

const ManageUsers = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const {data: users = [], refetch} = useQuery(['users'],async()=>{
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = (user) =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Instructor now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Summer Camp || Manage user</title>
            </Helmet>
            <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image and Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Status change</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user, index) =><tr 
            key={user._id}
            >
                <th>
                  {index+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      
                    </div>
                  </div>
                </td>
                <td>
                 {user.email}
                </td>
                <td>{user.role}</td>
                <th>
                   
                  <button onClick={()=>handleMakeAdmin(user)} className={ user.role === 'Admin' ? "disabled" : "btn bg-blue-400 text-white btn-xs"}>Make Admin</button>
                  
                  <button onClick={()=>handleMakeInstructor(user)} className={ user.role === 'Instructor' ? "disabled " : "btn bg-blue-400 text-white btn-xs"}>Make Instructor</button>
                </th>
              </tr> )
        }
      {/* row 1 */}
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default ManageUsers;