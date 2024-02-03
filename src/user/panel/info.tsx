import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";

import store from "../../store";

type Props = {
    email: string;
    logout?(): void;
};

const UserPanelInfo = (props: Props) => {
    const { email, logout } = props;

    return (
        <>
            <Link to="/profile" className="has-text-white">
                {email}
            </Link>
            <a className="icon has-text-white" style={{ marginLeft: "10px" }} onClick={logout} title="Выйти">
                <i className="fas fa-sign-out-alt" />
            </a>
        </>
    );
};

export default observer((props: Props) => <UserPanelInfo {...props} logout={store.user.auth.logout} />);
