import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaRegEye } from "react-icons/fa";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log("logged in user",user);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Helmet>
        {" "}
        <title>Sports Camp | Login</title>
      </Helmet>
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
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered w-2/3"
                />
                {errors.email?.type === "required" && (
                  <p role="alert">email is required</p>
                )}
              </div>

              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className=" form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="type password again"
                  className="input input-bordered w-2/3"
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
              <div className="form-control mt-6 w-2/3">
                <input
                  className="btn btn-primary "
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <Link
              className="text-blue-500 text-center underline mb-4 "
              to="/registration"
            >
              New Here? create an account
            </Link>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
