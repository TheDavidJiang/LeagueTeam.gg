import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout";
import Summoner from "./pages/Summoner";
import Home from "./pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/summoner",
        element: <Summoner />
    }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <RouterProvider router={router} />
    </React.StrictMode>
)