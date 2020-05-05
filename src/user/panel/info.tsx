import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../auth/actions";

type Props = {
    email: string;
    logout(): void;
};

const UserPanelInfo = (props: Props) => {
    const { email, logout } = props;

    return (
        <>
            <Link to="/profile" className="has-text-white">
                {email}
            </Link>
            <a className="icon has-text-white" style={{ marginLeft: "10px" }} onClick={logout}>
                <i className="fas fa-sign-out-alt" />
            </a>
        </>
    );
};

export default connect(null, { logout })(UserPanelInfo);
