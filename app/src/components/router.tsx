import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Chat from "../pages/Chat/Chat";
import React from "react";
import Home from "../pages/Home/Home";

export const CHAT_ROUTE = '/chat'
export const HOME_ROUTE = '/home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: CHAT_ROUTE,
                element: <Chat/>
            },
            {
                path: HOME_ROUTE,
                element: <Home />
            },
        ]
    },
])

