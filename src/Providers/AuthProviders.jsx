import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {



    const authInfo= {
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;