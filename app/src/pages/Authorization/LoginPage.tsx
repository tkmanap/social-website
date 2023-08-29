import React from 'react';
import {Login} from "./Login";
import {Link} from "react-router-dom";
import {REGISTER_ROUTE} from "../../components/router";

const LoginPage = () => {
    return (
        <div>
            <h1>Login:</h1>
            <Login />
            <p>Create new account:</p>
            <Link to={REGISTER_ROUTE}>sign up</Link>
        </div>
    );
};

export default LoginPage;