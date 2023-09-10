import React from 'react';
import s from './Chat.module.css'
import Message from "./Message";

const Messages = () => {
    return (
        <div className={s.messages}>
            <Message />
        </div>
    );
};

export default Messages;