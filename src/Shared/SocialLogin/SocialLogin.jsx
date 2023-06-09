import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGoogle, FaGoogleWallet } from 'react-icons/fa';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result) =>{
            const loggedUser = result.user;
            console.log(loggedUser);
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