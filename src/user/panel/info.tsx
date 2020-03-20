import React from "react";
import { Link } from "react-router-dom";

interface IProps {
    email: string;
}

const UserPanelInfo = (props: IProps) => {
    return (
        <Link to="/profile" className="has-text-white">
            {props.email}
        </Link>
    );
};

export default UserPanelInfo;
