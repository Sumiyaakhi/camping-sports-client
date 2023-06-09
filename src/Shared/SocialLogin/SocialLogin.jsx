import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGoogle } from 'react-icons/fa';

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
        <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'>
            <FaGoogle></FaGoogle>
        </button>
        </div>
    </div>
    );
};

export default SocialLogin;