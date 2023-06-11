import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGoogle, FaGoogleWallet } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?. from?.pathname || "/" ;

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result) =>{
            const loggedUser = result.user;
            console.log("user data",loggedUser);
            const savedUser = { name: loggedUser.displayName, email: loggedUser.email, image:loggedUser.photoURL, role:"User"}
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(savedUser)
      })
      .then(res => res.json())
      .then(data => {
        
         
            navigate(from, {replace: true})
      })
    
        })
        
    }
    return (
        <div>
        <div className='divider'></div>
        <div className='w-full text-center my-3'>
        <button onClick={handleGoogleSignIn} className=' btn bg-blue-300 px-32 py-2 rounded '>
            <FaGoogle className='w-6 h-6'></FaGoogle> 
        </button>
        </div>
    </div>
    );
};

export default SocialLogin;