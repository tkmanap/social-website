import React from 'react';
import {useAppDispatch, useAuth} from "../../store/hooks";
import {Navigate} from "react-router-dom";
import {removeUser} from "../../store/slices/userSlice";
import {REGISTER_ROUTE} from "../../components/router";


const Home = () => {
    const dispatch = useAppDispatch()
    const {isAuth, email} = useAuth()
    return (
        <>
            {
                isAuth ? <div>
                        <h1>Welcome: </h1>
                        <button onClick={() => dispatch(removeUser)}>Log out from {email}</button>
                    </div>
                    :
                    <div>
                        <Navigate to={REGISTER_ROUTE}/>
                    </div>
            }
        </>
    )
};

export default Home;