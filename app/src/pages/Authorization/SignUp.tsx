import React from 'react';
import {useNavigate} from "react-router-dom";
import {PROFILE_ROUTE} from "../../components/router";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {useAppDispatch} from "../../types/hooks";
import Form from "./Form";
import {setUser} from "../../store/slices/userSlice";


const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                navigate(PROFILE_ROUTE)
            })
            .catch(console.error)
    }
    return (
        <>
            <Form title={"Sign up"} handleForm={handleRegister}/>
        </>
    );
};

export default SignUp;