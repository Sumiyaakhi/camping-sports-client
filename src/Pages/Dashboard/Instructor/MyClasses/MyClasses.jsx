import React from 'react';
import useAddClasses from '../../../../Components/hooks/useAddClasses';
import { Link } from 'react-router-dom';
import SectionTItle from '../../../../Components/SectionTitle/SectionTItle';

const MyClasses = () => {
    const [addClasses, refetch] = useAddClasses();
    console.log(addClasses);
    return (
        <div>
          <SectionTItle
          heading="All Classes for instructor"
          subHeading="based on add classes page"
          ></SectionTItle>
          <div>
            
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Photo &  Name</th>
        <th>Instructor Name</th>
        <th>Status</th>
        <th>Total Enrolled Student</th>
        <th>Feedback</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                addClasses.map((addClass,index) =><tr key={addClass._id}>
                    <th>{index+1}</th>
                    <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={addClass.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{addClass.className}</div>
              
            </div>
          </div>
        </td>
                    <td>{addClass.instructorName}</td>
                    <td>{addClass.status}</td>
                    <td className='text-center'>0</td>
                    <td> <Link to='/feedback'><button>Feedback</button></Link></td>
                    <td> <button>update</button></td>
                  </tr>)
            }
      
    </tbody>
  </table>
</div>
            </div>  
        </div>
    );
};

export default MyClasses;