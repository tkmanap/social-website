import React from 'react';
import {SignUp} from "./SignUp";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE} from "../../components/router";

const SignUpPage = () => {
    return (
        <div>
            <h1>Sign Up:</h1>
            <SignUp />
            <p>if you already have account!</p>
            <Link to={LOGIN_ROUTE}>login</Link>
        </div>
    );
};

export default SignUpPage;