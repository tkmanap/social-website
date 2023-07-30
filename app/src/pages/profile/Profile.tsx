import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

const Profile: React.FC = () => {
    const profile = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()
    return (
        <div>
aadadad
        </div>
    );
};

export default Profile;