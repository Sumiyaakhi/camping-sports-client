import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        backgroundImage:
          "url(/src/assets/desktop-wallpaper-abstract-login-page-thumbnail.jpg)",
      }}
      className="hero min-h-screen bg-base-200 "
    >
      <div className="hero-content flex-col w-full">
        <div className="text-center  text-white">
          <h1 className="text-5xl font-bold ">Login now!</h1>
          <p></p>
        </div>
        <div className="card md:w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <div className=" form-control">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <p
                className="text-end m-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                   <FaRegEye></FaRegEye>
                ) : (
                 
                  <FaEyeSlash></FaEyeSlash>
                )}
              </p>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <Link
            className="text-blue-500 text-center underline mb-4"
            to="/signup"
          >
            New Here? create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;