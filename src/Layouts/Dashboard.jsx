import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { FaHome, FaBookmark, FaUser, FaWallet, FaBuffer } from 'react-icons/fa';
import {AiFillHome} from'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import useAdmin from '../Components/hooks/useAdmin';
import useInstructor from '../Components/hooks/useInstructor';
import {BiLogOut} from 'react-icons/bi'

const Dashboard = () => {
    const {user, logOut} = useContext(AuthContext);
    // const isAdmin = false;
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor() ;

    const handleLogOut = ()=>{
      logOut()
      .then(()=>{})
      .catch(error => console.log(error))
        }
    


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
        
        </>
       : isInstructor ? <>
        <li><NavLink to='/dashboard/instructorHome'> <FaHome></FaHome> Instructor Home</NavLink></li>
        <li><NavLink to='/dashboard/addClass'> <FaBuffer></FaBuffer>
        Add A Class</NavLink></li>
        <li><NavLink to='/dashboard/myClasses'> <FaWallet></FaWallet> My Classes</NavLink></li>
       
        
        </> : <>
        
        <li><NavLink to='/dashboard/studentHome'><FaHome></FaHome>Student Home</NavLink></li>
        <li><NavLink to='/dashboard/selectedClasses'> <TiTick></TiTick>  My selected Classes</NavLink></li>
        <li><NavLink to='/dashboard/enrollClasses'> <FaBookmark></FaBookmark> My Enrolled Classes</NavLink></li>
        <li><NavLink to='/dashboard/paymentHistory'> <FaBookmark></FaBookmark> Payment History</NavLink></li>
        
        </>
      }
    
    <div className='divider'></div>

       <li><NavLink to='/'> <AiFillHome></AiFillHome> Home</NavLink></li>
       <li><Link onClick={handleLogOut} ><BiLogOut></BiLogOut> Log out </Link></li>
        {/* <li><NavLink>User Home</NavLink></li> */}

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;