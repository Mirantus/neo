import React from "react";
import { Link } from "react-router-dom";

import { IUser } from "../../types";

interface IProps {
    profile: IUser;
}

const ProfileContent = (props: IProps) => {
    return (
        <div className="container">
            <h1 className="title">Профиль</h1>
            <p>{props.profile.email}</p>

            <div className="buttons are-small" style={{ marginTop: "20px" }}>
                <Link to="/user/edit" className="button">
                    <span className="icon is-small">
                        <i className="fas fa-edit" />
                    </span>
                    <span>Редактировать</span>
                </Link>
            </div>
        </div>
    );
};

export default ProfileContent;
