import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Chat from "../pages/Chat/Chat";
import React from "react";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Authorization/LoginPage";
import SignUpPage from "../pages/Authorization/SignUpPage";

export const CHAT_ROUTE = '/chat'
export const HOME_ROUTE = '/home'
export const LOGIN_ROUTE = '/login'
export const REGISTER_ROUTE = '/register'


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
            {
                path: REGISTER_ROUTE,
                element: <SignUpPage />
            },
            {
                path: LOGIN_ROUTE,
                element: <LoginPage />
            }
        ]
    },
])

