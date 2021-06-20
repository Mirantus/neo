import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Store } from "../../store/index";
import { ErrorStore } from "../../types";

import Content from "./content";
import { init, login } from "./slices/submit";
import { UserLoginFormData } from "./types";

type Props = {
    error: ErrorStore;
    isAuthorized: boolean;
    init(): void;
    login(values: UserLoginFormData): void;
};

export const Login = (props: Props) => {
    const { error, isAuthorized, init, login } = props;

    useEffect(() => {
        init();
    }, [init]);

    return isAuthorized ? <Redirect to={{ pathname: "/profile" }} /> : <Content onSubmit={login} formError={error} />;
};

const mapStateToProps = (store: Store) => ({
    error: store.user.login.submit.error,
    isAuthorized: store.user.auth.isAuthorized,
});

export default connect(mapStateToProps, { init, login })(Login);
