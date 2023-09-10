import React from 'react';
import s from './Chat.module.css'

const Input = () => {
    return (
        <>
            <div className={s.input}>
                <input type="text" placeholder='Type something...'/>
            </div>
            <div className={s.send}>
                <img src="" alt="Attach"/>
                <input type='file' id='file'/>
                <label htmlFor="file">
                    <img src="" alt="img"/>
                </label>
                <button>Send</button>
            </div>
        </>
    );
};

export default Input;