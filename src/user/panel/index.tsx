import React from "react";
import { connect } from "react-redux";

import { Store } from "../../store/reducers";
import Button from "./button";
import Info from "./info";

type Props = {
    email: string;
    isAuthorized: boolean;
};

const UserPanel = (props: Props) => {
    const { email, isAuthorized } = props;

    return <div className="navbar-item">{isAuthorized ? <Info email={email} /> : <Button />}</div>;
};

const mapStateToProps = ({ user }: Store) => ({
    email: user.profile.email,
    isAuthorized: user.auth.isAuthorized,
});

export default connect(mapStateToProps)(UserPanel);
