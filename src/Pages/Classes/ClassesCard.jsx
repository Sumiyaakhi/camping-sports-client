import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassesCard = ({singleClass}) => {
    const {  _id, image,name, price, availableSeats,instructor} = singleClass;
    // console.log(singleClass);
    // const updatedClass = singleClass;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [seats, setSeats] = useState(availableSeats);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

const handleSelected = (data) =>{
  if(data){
     setSeats(seats - 1);
  }
   console.log(data);
   if(user){
    setIsButtonDisabled(true)
    const classData = {name, image, price, instructor, availableSeats,email:user.email }
    fetch('http://localhost:5000/selectedclasses',{
      method:'POST',
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(classData)
    })
    .then(res => res.json())
    .then(data => {
      console.log("post data",data);
      if(data.insertedId){
           
        Swal.fire({
          icon: 'success',
          title: 'class inserted Successfully',
         
        })
      }
     
    })
    .catch((error)=>{
      setIsButtonDisabled(false);
    })
   }
   else{
    Swal.fire({
      title: 'Please login to select this class',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login Now!'
    }).then((result) => {
      if (result.isConfirmed) {
       navigate('/login', {state: {from: location}})
      }
    })
  }
}
// console.log(updatedClass);

    return (
      <div className={availableSeats == 0 ? "card w-96 bg-red-100 shadow-xl" : "card w-96 bg-base-100 shadow-xl"}>
      <figure><img className='w-screen h-64' src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructor: {instructor}</p>
        <p>Price: ${price}</p>
        <p>Available seat: {seats}</p>
      
        <div className="card-actions justify-center">
          <button disabled={isButtonDisabled} onClick={()=>handleSelected(singleClass)} className="btn bg-blue-400 text-white px-12"> {isButtonDisabled ? 'Selected' : 'Select'}</button>
        </div>
      </div>
    </div>
    );
};

export default ClassesCard;