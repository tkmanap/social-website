import React from 'react';
import s from './Chat.module.css'


const Message = () => {
    return (
        <div className={s.message}>
            <div className={s.messsageInfo}>
                <img src="" alt="userPhoto"/>
                <span>just now</span>
            </div>
            <div className={s.messageContent}>
                <p>message text</p>
                <img src="" alt="message img"/>
            </div>
        </div>
    );
};

export default Message;