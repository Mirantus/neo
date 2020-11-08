import React from "react";
import { Link } from "react-router-dom";

const UserPanelButton = () => {
    return (
        <div className="buttons">
            <Link to="/login" className="button is-light">
                Войти
            </Link>
        </div>
    );
};

export default UserPanelButton;
