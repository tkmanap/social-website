import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {RouterProvider} from "react-router-dom";
import {router} from "./components/router";
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import {apiSlice} from "./store/api";
import './firebase'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ApiProvider api={apiSlice}>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </ApiProvider>
);