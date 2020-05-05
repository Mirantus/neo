import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Store } from "../../store/reducers";
import { initLogin, login } from "./actions";
import Content from "./content";
import { LoginErrorStore } from "./reducers/error";
import { UserLoginFormData } from "./types";

type Props = {
    error: LoginErrorStore;
    isAuthorized: boolean;
    initLogin(): void;
    login(values: UserLoginFormData): void;
};

export const Login = (props: Props) => {
    const { error, isAuthorized, initLogin, login } = props;

    React.useEffect(() => {
        initLogin();
    }, [initLogin]);

    return isAuthorized ? <Redirect to={{ pathname: "/profile" }} /> : <Content onSubmit={login} formError={error} />;
};

const mapStateToProps = (store: Store) => ({
    error: store.user.login.error,
    isAuthorized: store.user.auth.isAuthorized,
});

export default connect(mapStateToProps, { initLogin, login })(Login);
