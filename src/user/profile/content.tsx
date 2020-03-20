import React from "react";

import { IUser } from "../../types";

interface IProps {
    profile: IUser;
}

const ProfileContent = (props: IProps) => {
    return (
        <div className="container">
            <h1 className="title">Профиль</h1>
            <p>{props.profile.email}</p>
        </div>
    );
};

export default ProfileContent;
