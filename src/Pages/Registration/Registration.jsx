import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet';

const Registration = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("")
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const onSubmit = data => {
      console.log(data.password,data.confirmPassword);
        if(data.password !== data.confirmPassword){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'your password is not matched!',
              })
              return;
        }
console.log(data);
createUser(data.email, data.password)
.then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser);
    updateUserProfile(data.name, data.photoURL)
    .then(()=> {
        const savedUser = { name: data.name, email: data.email, image:data.photoURL, role:"User"}
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(savedUser)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          reset();
          Swal.fire({
            icon: 'success',
            title: 'sign up successful',
          })
          navigate('/')
        }
      })
    })
    
})

    }
    return (
        <>
        <Helmet> <title>Sports Camp | Registration</title></Helmet>
           < div style={{
        backgroundImage:
          "url(/src/assets/desktop-wallpaper-abstract-login-page-thumbnail.jpg)",
      }} className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Registration!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" 
                {...register("name", { required: true })}
                placeholder="email" className="input input-bordered w-2/3" />
                 {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" 
                {...register("photoURL", { required: true })}
                placeholder="Photo URL" className="input input-bordered w-2/3" />
                 {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" 
                {...register("email", { required: true })}
                placeholder="email" className="input input-bordered w-2/3" />
                  {errors.email?.type === 'required' && <p role="alert">email is required</p>}
                  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", { required: true,maxLength:20, minLength:6,pattern:/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/ })}
                placeholder="password" className="input input-bordered w-2/3" />
                {errors.password?.type === 'required' && <p className='text-red-400' role="alert">password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-400' role="alert">Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-400' role="alert">Password must have one uppercase, one lowercase, one number and one special character</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className='form-control'>
              <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
            <input  type="password" {...register("confirmPassword", { required: true })}
                placeholder="type password again" className="input input-bordered w-2/3" />
              </div>
              <div className="form-control mt-6 w-2/3">
                
                <input  className="btn text-white bg-blue-500 border-0" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='mx-auto mb-3 underline text-blue-500'><Link to='/login'>Already have an account?</Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>  
        </>
    );
};

export default Registration;