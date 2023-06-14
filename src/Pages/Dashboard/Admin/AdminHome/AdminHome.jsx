import React, { useContext } from 'react';
import SectionTItle from '../../../../Components/SectionTitle/SectionTItle';
import { AuthContext } from '../../../../Providers/AuthProviders';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <SectionTItle heading="Admin" subHeading="about info"></SectionTItle>
      <div className="flex justify-center">
        <div className="avatar online">
          <div className="w-48 rounded-full">
            <img src={user.photoURL} />
          </div>
        </div>
        
      </div>
      <h1 className="text-3xl font-bold text-center my-4">{user.displayName}</h1>
      <p className="text-center">Email: {user.email}</p>
    </div>
  );
};

export default AdminHome;