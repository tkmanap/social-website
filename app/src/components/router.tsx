import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Chat from "../pages/Chat/Chat";
import React from "react";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authorization/SignUp";
import SignIn from "../pages/Authorization/SignIn";
import Profile from "../pages/Profile/Profile";


export const CHAT_ROUTE = '/chat'
export const HOME_ROUTE = '/home'
export const LOGIN_ROUTE = '/login'
export const REGISTER_ROUTE = '/register'
export const PROFILE_ROUTE = '/profile'


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
                element: <Home/>
            },
            {
                path: REGISTER_ROUTE,
                element: <SignUp/>
            },
            {
                path: LOGIN_ROUTE,
                element: <SignIn />
            },
            {
                path: PROFILE_ROUTE,
                element: <Profile />
            }
        ]
    },
])

