import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClassesCard = ({ selectedClass, index }) => {
  const { _id, name, image, price, instructor } = selectedClass;

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
        <Link to="">
          <button className="btn bg-blue-400 text-white btn-xs">pay</button>
        </Link>
      </td>
    </tr>
  );
};

export default SelectedClassesCard;
