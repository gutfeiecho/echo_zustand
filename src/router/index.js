import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Blog from '../pages/blog';
import BasicLayout from "../layouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" />
            },
            {
                path: "dashboard",
                index: true,
                element: <Dashboard />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "about",
                element: (
                    <div>
                        <h1>Hello World!</h1>
                        <Link to="about">About Us</Link>
                    </div>
                )
            }
        ]
    }
])

export default router;