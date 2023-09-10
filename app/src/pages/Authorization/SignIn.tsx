import React from 'react';
import {useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useAppDispatch} from "../../types/hooks";
import {setUser} from "../../store/slices/userSlice";
import Form from "./Form";

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate('')
            })
            .catch(() => alert('Invalid user!'))
    }
    return (
        <Form title={"Sign in"} handleForm={handleLogin}
        />)
};

export default SignIn;