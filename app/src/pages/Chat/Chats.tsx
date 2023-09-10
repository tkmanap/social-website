import React from 'react';
import s from './Chat.module.css'
import Message from "./Message";
import Input from "./Input";

const Chats = () => {
    return (
        <div className={s.dialog}>
            <div className={s.dialogInfo}>
                <span>username</span>
                <div className={s.dialogIcons}>
                    <img src="" alt="Camera"/>
                    <img src="" alt="Add"/>
                    <img src="" alt="More"/>
                </div>
            </div>
            <Message />
            <Input />
        </div>
    );
};

export default Chats;