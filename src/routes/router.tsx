import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Feather from "../pages/Feather";
import About from "../pages/About";
import Contack from "../pages/Contack";
import Register from "../auth/Register";
import Login from "../auth/Login";
import LogoutButton from "../auth/LogOutButton";
import RideDashboard from "../Dashboard/Ride_Dash/Ride_Dashboard";
import DriverDashboard from "../Dashboard/Driver/DriverDashboard/DriverDashboard";
import ProtectedRoute from "../auth/ProtectedRoutes";
import Admin_Dashboard from "../Dashboard/Admin/Admin_Dashboard";
import Unauthorized from "../pages/Unauthorized";
import RideDetails from "../Dashboard/Ride_Dash/Ride_Details";
import Ride_Request_Book from "../pages/Ride_Request_Book";
import NotFound from "../utils/NotFoundPage";



const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<NotFound></NotFound>,
        
        children: [
            {
                index:true,
                element:<Home></Home>

            },
         
         
         
   
        ]
    },
                 {
        path:"/about",
        element:<About></About>
    },
    {
        path:"contack",
        element:<Contack></Contack>
    },{
        path:"feather",
        element:<Feather></Feather>
    },

    {
        path:"register",
        element:<Register></Register>
    },
    {
        path:"login",
        element:<Login></Login>
    },
    {
        path:"logout",
        element:<LogoutButton></LogoutButton>
    },
    {
        path:"rider",
        element:<ProtectedRoute allowedRoles={["rider"]}>
            <RideDashboard></RideDashboard>
        </ProtectedRoute>
    },
    {
        path:"ride_request_book",
        element:
            <Ride_Request_Book></Ride_Request_Book>
       
    },


    {
        path:"ride/:id",
        element:<RideDetails></RideDetails>
    },
    {
        path:"driver",
        element:<ProtectedRoute allowedRoles={["driver"]}>
            <DriverDashboard></DriverDashboard>
        </ProtectedRoute>

    },
    {
        path:"admin",
        element:<ProtectedRoute allowedRoles={["admin"]}>
            <Admin_Dashboard></Admin_Dashboard>
        </ProtectedRoute>
    },

    {
        path:"unauthorized",
        element:<Unauthorized></Unauthorized>
    },
   
]);
export default router;