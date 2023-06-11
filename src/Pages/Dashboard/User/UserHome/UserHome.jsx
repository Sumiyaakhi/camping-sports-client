import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';

const UserHome = () => {
    const { user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default UserHome;