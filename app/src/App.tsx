import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import SideBar from "./components/SideBar";



const App: React.FC = () => {
    return (
        <>
            <SideBar/>
            <Outlet/>
        </>
    );
}

export default App;
