import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';

const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
    useEffect(()=>{
        fetch('http://localhost:5000/payment')
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            setPaymentHistory(data)})
    },[])


    const sortedData = paymentHistory.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
    
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
    
      const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      };

      
    return (
        
            <div>
                
      <div className='text-end my-12'>
      <button onClick={toggleSortOrder}>
         {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </button>
      </div>
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
        <th>Transaction Id</th>
        <th>Date and Time</th>
      </tr>
    </thead>
    <tbody>
        {
            sortedData.map((history,index) =><tr key={history._id}>
                <th>
                 {index+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={history.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{history.name}</div>
                      <div className="text-sm opacity-50">${history.price}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.name}
                  <br/>
                  <span className="badge badge-ghost badge-sm">{history.email}</span>
                </td>
                <td>{history.transactionId}</td>
                <td>{history.date}</td>
               
              </tr>)
        }
      {/* row 1 */}
      
     
     
      
    </tbody>
   
    
  </table>
</div>
        </div>
    
    );
};

export default PaymentHistory;