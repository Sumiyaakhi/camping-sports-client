import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { FaHome, FaBookmark, FaUser, FaWallet, FaBuffer } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import useAdmin from '../Components/hooks/useAdmin';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    // const isAdmin = false;
    const isAdmin = useAdmin()
    const isInstructor =false ;

    return (
        <div className="drawer lg:drawer-open md:w-10/12 mx-auto">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-blue-200 text-base-content">
      {/* Sidebar content here */}
        
        <div className='avatar justify-center my-8'>
            <div className='w-20 rounded-full'>
            {/* <img src={user.photoURL} alt="" /> */}
            </div>
        </div>
        {/* <h4 className='text-center text-xl py-2'>User name: {user.displayName}</h4> */}

      {
        isAdmin ? <>
        <li><NavLink to='/dashboard/adminhome'> <FaHome></FaHome> Admin Home</NavLink></li>
        <li><NavLink to='/dashboard/manageClasses'> <FaWallet></FaWallet>
        Manage Classes</NavLink></li>
        <li><NavLink to='/dashboard/manageUsers'> <FaUser></FaUser> Manage Users</NavLink></li>
        
        </> : isInstructor ? <>
        <li><NavLink to='/dashboard/instructorhome'> <FaHome></FaHome> Instructor Home</NavLink></li>
        <li><NavLink to='/dashboard/addAClasses'> <FaBuffer></FaBuffer>
        Add A Class</NavLink></li>
        <li><NavLink to='/dashboard/myClasses'> <FaWallet></FaWallet> My Classes</NavLink></li>

        
        </> : <>
        
        <li><NavLink to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink></li>
        <li><NavLink to='/dashboard/selectedClasses'> <TiTick></TiTick>  My selected Classes</NavLink></li>
        <li><NavLink to='/dashboard/enrolledclasses'> <FaBookmark></FaBookmark> My Enrolled Classes</NavLink></li>
        </>
      }

       
        {/* <li><NavLink>User Home</NavLink></li> */}

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;