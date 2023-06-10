import React, { useContext } from "react";
import logo from "../../assets/summerCamp.jpg";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut} = useContext(AuthContext)
  const navItems = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/instructor'>Instructors</NavLink></li>
  <li><NavLink to='/classes'>Classes</NavLink></li>
  { user? <li><NavLink to='/dashboard'>Dashboard</NavLink></li> : <></>}
   </>


const handleLogOut = ()=>{
  logOut()
  .then(()=>{})
  .catch(error => console.log(error))
    }

  return (
    <>
    <div className="">
   
  <h1 className="text-2xl text-center bg-blue-500 text-white font-serif ">Sports summer camp</h1>
  
    </div>
    <div className="navbar bg-base text-black font-bold max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-black opacity-50 menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-white"
          >
           {navItems}
          </ul>
        </div>
        <img className="w-36 " src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
       {
        user ? <><button onClick={handleLogOut} className="btn bg-blue-500 text-white">Log Out</button>
        <div className="avatar"><div className="w-12 rounded-full ms-3"><img  src={user.photoURL} alt="" /></div></div></> : <Link to='/login'><button className="btn bg-blue-500 text-white">Log in</button></Link>
       }
        
        
      </div>
    </div>
    </>
  );
};

export default Navbar;
