import React from 'react';
import {Link} from "react-router-dom";
import {CHAT_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "./router";

const SideBar: React.FC = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={CHAT_ROUTE}>Chat</Link>
                </li>
                <li>
                    <Link to={HOME_ROUTE}>Home</Link>
                </li>
                <li>
                    <Link to={LOGIN_ROUTE}>LOGIN</Link>
                </li>
            </ul>
        </>
    );
};

export default SideBar;