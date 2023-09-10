import React from 'react';
import s from './Chat.module.css'
import ChatNavBar from "./ChatNavBar";
import Search from "./Search";

const ChatSideBar = () => {
    return (
        <div className={s.sidebar}>
            <ChatNavBar />
            <Search />
        </div>
    );
};

export default ChatSideBar;