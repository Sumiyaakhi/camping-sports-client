import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Providers/AuthProviders";
import useSelectedClasses from "../../../../Components/hooks/useSelectedClasses";
import SectionTItle from "../../../../Components/SectionTitle/SectionTItle";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useSelectedClasses();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (classData) => {
    console.log(classData);    
    fetch('http://localhost:5000/instructor/addClass',{
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(classData)
    })
    .then(res => res.json())
    .then(data => {
     if(data.insertedId){
        reset()
       Swal.fire({
           icon: 'success',
           title: 'class added Successful',
         })
        }
        })
};
  return (
    <>
      <SectionTItle
        heading="Add a class"
        subHeading="fill the form and add this class"
      ></SectionTItle>
      <div className="mb-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input type="text"  className="input input-bordered input-accent w-full"
          
          {...register("className", { required: true })}
            placeholder=" Class Name"/>
{errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
          
          
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="text"
            {...register("photoURL", { required: true })}
            placeholder="image"
            className="input input-bordered input-accent w-full"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Instructor Name</span>
          </label>
          <input
            className="input input-bordered input-accent w-full"
            defaultValue={user.displayName}
            {...register("instructorName")}
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            className="input input-bordered input-accent w-full"
            defaultValue={user.email}
            {...register("email")}
            readOnly
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="number"
            {...register("availableSeats", { required: true })}
            placeholder="Available Seats"
            className="input input-bordered input-accent w-full my-3"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            className="input input-bordered input-accent w-full "
            type="number"
            {...register("price", { required: true })}
            placeholder=" Price"
          />
          <input
            className="input input-bordered input-accent w-full my-3"
            type="text"
            defaultValue= "Pending..."
            {...register("status")}
           
          />
        </div>
       
        
        
       <div className="my-3 flex justify-end">
       <input  className="btn bg-green-500 border-0 text-white" type="submit" value="Add a class" />
       </div>
      </form>
      </div>
    </>
  );
};

export default AddAClass;
