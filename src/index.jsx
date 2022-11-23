import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout";
import Summoner from "./pages/Summoner";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error-page";
import SummonerPage from "./pages/SummonerPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/summoner",
        element: <Summoner />,
        children:[
            {
                path: "summoner/:summonerName",
                element: <SummonerPage />
            }
        ]
    }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <RouterProvider router={router} />
    </React.StrictMode>
)