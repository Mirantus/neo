import React from "react";
import { Link } from "react-router-dom";

import { User } from "../../types";

type Props = {
    profile: User;
};

const ProfileContent = (props: Props) => {
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

                <Link to="/change_password" className="button">
                    <span className="icon is-small">
                        <i className="fas fa-key" />
                    </span>
                    <span>Изменить пароль</span>
                </Link>
            </div>
        </div>
    );
};

export default ProfileContent;
