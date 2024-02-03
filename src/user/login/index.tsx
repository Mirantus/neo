import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import store from "../../store";
import { ErrorStore, User } from "../../types";

import Content from "./content";
import { UserLoginFormData } from "./types";

type Props = {
    error: ErrorStore;
    isAuthorized: boolean;
    init(): void;
    login(values: UserLoginFormData, profile: User): void;
    profile: User;
};

export const Login = (props: Props) => {
    const { error, isAuthorized, init, login, profile } = props;

    useEffect(() => {
        init();
    }, [init]);

    const handleSubmit = (values: UserLoginFormData) => {
        login(values, profile);
    };

    return isAuthorized ? (
        <Redirect to={{ pathname: "/profile" }} />
    ) : (
        <Content onSubmit={handleSubmit} formError={error} />
    );
};

export default observer(() => (
    <Login
        error={store.user.login.submit.error}
        isAuthorized={store.user.auth.isAuthorized}
        init={store.user.login.submit.init}
        login={store.user.login.submit.login}
        profile={store.user.profile}
    />
));
