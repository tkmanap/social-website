import React from 'react';
import {useAppDispatch} from "../../types/hooks";
import {useAuth} from "../../types/use-auth";
import {removeUser} from "../../store/slices/userSlice";

const Profile = () => {
    const dispatch = useAppDispatch()
    const {isAuth, email} = useAuth()
    return (
        isAuth ? (
            <div>
                <h1>Welcome!</h1>
                <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
            </div>
        ) : (
            <h1>you don't login</h1>
        ))
};

export default Profile;