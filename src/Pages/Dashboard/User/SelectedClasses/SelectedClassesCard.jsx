import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import queryString from 'query-string';


const SelectedClassesCard = ({ selectedClass, index }) => {
  const { _id, name, image, price, instructor } = selectedClass;
// console.log(price);
const [classPrice, setClassPrice] = useState(0)
console.log(classPrice);
  const handleDelete = (selectedClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedclasses/${selectedClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

const handlePrice = (data) =>{
  console.log(data);
  setClassPrice(data)
  
  
}

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{instructor}</td>
      <td>
        <button
          onClick={() => handleDelete(selectedClass)}
          className="btn bg-red-400 text-white btn-xs"
        >
          delete
        </button>
      </td>
      <td>
      
        <Link    to="/dashboard/payment"> 
          <button  onClick={()=> handlePrice(price)}  className="btn bg-blue-400 text-white btn-xs">pay</button>
        </Link>
      </td>
    </tr>
  );
};

export default SelectedClassesCard;


// to="/dashboard/payment"