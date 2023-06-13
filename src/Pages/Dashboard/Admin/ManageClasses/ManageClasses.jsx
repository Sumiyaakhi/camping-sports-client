import React, { useEffect, useState } from "react";
import useSelectedClasses from "../../../../Components/hooks/useSelectedClasses";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [pendingClasses, setPendingClasses] = useState([]);
  const [, refetch] = useSelectedClasses();

  useEffect(() => {
    fetch("http://localhost:5000/admin/pendingClasses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPendingClasses(data);
      });
  }, []);

  const handleMakeApprove = (user) => {
    fetch(`http://localhost:5000/admin/approved/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.className} is approved now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeDeny = (user) => {
    fetch(`http://localhost:5000/admin/denied/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `Sorry!!! ${user.className} is deny`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

 

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image & Name</th>
              <th>Instructor Name & email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {pendingClasses.map((pendingClass, index) => (
              <tr key={pendingClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={pendingClass.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{pendingClass.className}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {pendingClass.instructorName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {pendingClass.email}
                  </span>
                </td>
                <td>{pendingClass.availableSeats}</td>
                <td>${pendingClass.price}</td>
                <td>{pendingClass.status}</td>
                <th>
                  <button
                    onClick={() => handleMakeApprove(pendingClass)}
                    className={
                      pendingClass.status === "approved"
                        ? "disabled"
                        : "btn bg-blue-400 text-white btn-xs"
                    }
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleMakeDeny(pendingClass)}
                    className={
                      pendingClass.status === "deny"
                        ? "disabled "
                        : "btn bg-blue-400 my-2 text-white btn-xs"
                    }
                  >
                    Deny
                  </button>
                </th>
                {/* <th>
                  <label
                    htmlFor="my_modal_6"
                    className="btn bg-blue-400 text-white "
                  >
                    Feedback
                  </label>
                  <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Reason of {pendingClass.status}
                      </h3>
                      
                      <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">
                          Close!
                        </label>
                      </div>
                    </div>
                  </div>
                </th> */}
                <th>
                  <Link to='/dashboard/feedback'> <button className="bg-blue-400 text-white btn">Feedback</button> </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
