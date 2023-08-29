import React from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {Form} from "./Form";
import {useAppDispatch} from "../../store/hooks";
import {setUser} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const push = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
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
                title="login"
                handleClick={handleLogin}
            />
    );
};

export {Login};