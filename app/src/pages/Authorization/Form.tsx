import React, {useState} from 'react';
import s from "./Sign.module.css";


interface FormPropsTypes {
    title: string,
    handleForm: (email: string, password: string) => void
}

const Form: React.FC<FormPropsTypes> = ({title, handleForm}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className={s.container}>
            <div className={s.formWrapper}>
                <span className={s.title}>{title}</span>
                <form>
                    <input
                        type="email"
                        placeholder={'Email'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder={'Password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        onClick={() => handleForm(email, password)}
                    >{title}</button>
                </form>
            </div>
        </div>
    );
};


export default Form;