import { createBrowserRouter, Link } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Blog from '../pages/blog';
import App from '../App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "dashboard",
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
])

export default router;