import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import CommingSoon from "../../Pages/Shared/CommingSoon/CommingSoon";
import Error from "../../Pages/Shared/Error/Error";
import LoginFirst from "../../Pages/Shared/LoginFirst/LoginFirst";
import Singup from "../../Pages/Singup/Singup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <CommingSoon />
            },
            {
                path: '/reviews',
                element: <CommingSoon />
            },
            {
                path: '/contactus',
                element: <CommingSoon />
            },
            {
                path: '/appoinment',
                element: <Appoinment />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/singup',
                element: <Singup />
            },
            {
                path: '/loginfirst',
                element: <LoginFirst />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
    }
])