import React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import Button from "./button";
import Info from "./info";

interface IProps {
    email: string;
    isAuthorized: boolean;
}

const UserPanel = (props: IProps) => {
    const { email, isAuthorized } = props;

    return <div className="navbar-item">{isAuthorized ? <Info email={email} /> : <Button />}</div>;
};

const mapStateToProps = ({ user }: IStore) => ({
    email: user.profile.email,
    isAuthorized: user.auth.isAuthorized,
});

export default connect(mapStateToProps)(UserPanel);
