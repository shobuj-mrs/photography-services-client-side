import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login&Register/Login/Login";
import Register from "../../Pages/Login&Register/Register/Register";
import Services from "../../Pages/Services/Services";
import DetailServices from "../../Pages/Services/DetailServices";
import LearnMore from "../../Pages/LearnMore/LearnMore";


export const router = createBrowserRouter([

    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-11-service-server-side.vercel.app/home')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://assignment-11-service-server-side.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <DetailServices></DetailServices>,
                loader: ({ params }) => fetch(`https://assignment-11-service-server-side.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/learnmore',
                element: <LearnMore></LearnMore>
            }
        ]
    }
])