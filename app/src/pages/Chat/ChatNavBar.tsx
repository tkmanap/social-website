import React from 'react';
import s from './Chat.module.css'

const ChatNavBar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.user}>
                <img className={s.userImg} src="" alt="" />
                <span>username</span>
                <button className={s.userBtn}>logout</button>
            </div>
        </div>
    );
};

export default ChatNavBar;