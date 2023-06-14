import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import Classes from '../Pages/Classes/Classes';
import Dashboard from '../Layouts/Dashboard';
import UserHome from '../Pages/Dashboard/User/UserHome/UserHome';
import SelectedClasses from '../Pages/Dashboard/User/SelectedClasses/SelectedClasses';
import PrivateRoute from './PrivateRoute';
import EnrollClasses from '../Pages/Dashboard/User/EnrollClasses/EnrollClasses';
import ManageClasses from '../Pages/Dashboard/Admin/ManageClasses/ManageClasses';
import ManageUsers from '../Pages/Dashboard/Admin/ManageUsers/ManageUsers';
import AddAClass from '../Pages/Dashboard/Instructor/AddAClass/AddAClass';
import MyClasses from '../Pages/Dashboard/Instructor/MyClasses/MyClasses';
import AdminRoute from './AdminRoute';
import InstructorRoute from './InstructorRoute';
import InstructorInfo from '../Pages/InstructorInfo/InstructorInfo';
import Feedback from '../Pages/Dashboard/Admin/ManageClasses/Feedback';
import Payment from '../Pages/Dashboard/User/Payment/Payment';
import SelectedClassesCard from '../Pages/Dashboard/User/SelectedClasses/SelectedClassesCard';
import PaymentHistory from '../Pages/Dashboard/User/PaymentHistory/PaymentHistory';
import InstructorHome from '../Pages/Dashboard/Instructor/InstructorHome/InstructorHome';
import AdminHome from '../Pages/Dashboard/Admin/AdminHome/AdminHome';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        },
        {
          path:'/instructor',
          element:<InstructorInfo></InstructorInfo>
        }
      ]
    },
    {
      path: 'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'studentHome',
          element:<UserHome></UserHome>
        },
        {
          path:'enrollClasses',
          element:<EnrollClasses></EnrollClasses>
        },
        {
          path:'selectedClasses',
          element:<SelectedClasses></SelectedClasses>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        // admin routes
        {
          path:'adminhome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'manageClasses',
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path:'feedback',
          element:<AdminRoute><Feedback></Feedback></AdminRoute>
        },
        {
          path:'manageUsers',
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        // instructor dashboard
        {
          path:'instructorHome',
          element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
        },
        {
          path:'addClass',
          element:
          <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
        },
        {
          path:'myClasses',
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        }
      ]
    }
  ]);

export default router;