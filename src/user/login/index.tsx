import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { IStore } from "../../store/reducers";
import { initLogin, login } from "./actions";
import Content from "./content";
import { ILoginErrorStore } from "./reducers/error";
import { IUserLogin } from "./types";

type IProps = {
    error: ILoginErrorStore;
    isAuthorized: boolean;
    initLogin(): void;
    login(values: IUserLogin): void;
};

export const Login = (props: IProps) => {
    const { error, isAuthorized, initLogin, login } = props;

    React.useEffect(() => {
        initLogin();
    }, [initLogin]);

    return isAuthorized ? <Redirect to={{ pathname: "/profile" }} /> : <Content onSubmit={login} formError={error} />;
};

const mapStateToProps = (store: IStore) => ({
    error: store.user.login.error,
    isAuthorized: store.user.auth.isAuthorized,
});

export default connect(mapStateToProps, { initLogin, login })(Login);
