import React from 'react';
import s from './Chat.module.css'
import Chats from "./Chats";
import ChatSideBar from "./ChatSideBar";

const Chat = () => {
    return (
        <div className={s.chat}>
            <div className={s.container}>
                <ChatSideBar />
                <Chats />
            </div>
        </div>
    );
};

export default Chat;