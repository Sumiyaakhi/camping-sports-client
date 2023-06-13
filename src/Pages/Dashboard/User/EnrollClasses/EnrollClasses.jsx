import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';

const EnrollClasses = () => {
    const [enrollClasses, setEnrollClasses] = useState([]);
    const {user}= useContext(AuthContext)
    useEffect(()=>{
        fetch('http://localhost:5000/payment')
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            setEnrollClasses(data)})
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>User Name & Email</th>
        <th>status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            enrollClasses.map((enrollClass,index) =><tr key={enrollClass._id}>
                <th>
                 
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={enrollClass.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{enrollClass.name}</div>
                      <div className="text-sm opacity-50">${enrollClass.price}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.name}
                  <br/>
                  <span className="badge badge-ghost badge-sm">{enrollClass.email}</span>
                </td>
                <td>{enrollClass.status}</td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
        }
      {/* row 1 */}
      
     
     
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default EnrollClasses;