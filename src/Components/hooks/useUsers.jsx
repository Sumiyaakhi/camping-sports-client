import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const useUsers = () => {
    const {user} = useContext(AuthContext);

    
    return (
        <div>
            
        </div>
    );
};

export default useUsers;