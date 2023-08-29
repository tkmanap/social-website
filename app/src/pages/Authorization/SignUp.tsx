import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from "./Form";
import {useAppDispatch} from "../../store/hooks";
import {setUser} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const dispatch = useAppDispatch()
    const push = useNavigate()
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
                push('/home')
            })
            .catch(console.error)
    }
    return (
            <Form
                title='register'
                handleClick={handleRegister}
            />
    );
};

export {SignUp};