import React from 'react';
import s from './Chat.module.css'

const Search = () => {
    return (
        <div className={s.search}>
            <div className={s.searchForm}>
                <input type="text"/>
            </div>
            <div className={s.userChat}>
                <img src="" alt="userPhoto"/>
                <div className={s.userChatInfo}>
                    <span>username</span>
                </div>
            </div>
        </div>
    );
};

export default Search;