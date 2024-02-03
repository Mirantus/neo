import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../store";

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

export default observer(() => (
    <UserPanel email={store.user.profile.email} isAuthorized={store.user.auth.isAuthorized} />
));
