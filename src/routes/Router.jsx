import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys";
import Blog from "../pages/Blog";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ViewDetails from "../pages/ViewDetails";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import Updated from "../pages/MyToys/Updated";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home> </Home>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyToys></MyToys> </PrivateRoute>
            },
            {
                path: 'addtoys',
                element: <AddToys></AddToys>
            },
            {
                path: 'blog',
                element: <Blog></Blog>

            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'alltoys/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toys-car-server-ten.vercel.app/alltoys/${params.id}`)
            },
            {
                path: 'mytoys/:id',
                element: <Updated></Updated>,
                loader: ({ params }) => fetch(`https://toys-car-server-ten.vercel.app/mytoys/${params.id}`)
            }
        ]

    }
])

export default router;
