import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { ErrorStore } from "../../store/error";
import { Store } from "../../store/reducers";
import { init, login } from "./actions";
import Content from "./content";
import { UserLoginFormData } from "./types";

type Props = {
    error: ErrorStore;
    isAuthorized: boolean;
    init(): void;
    login(values: UserLoginFormData): void;
};

export const Login = (props: Props) => {
    const { error, isAuthorized, init, login } = props;

    React.useEffect(() => {
        init();
    }, [init]);

    return isAuthorized ? <Redirect to={{ pathname: "/profile" }} /> : <Content onSubmit={login} formError={error} />;
};

const mapStateToProps = (store: Store) => ({
    error: store.user.login.error,
    isAuthorized: store.user.auth.isAuthorized,
});

export default connect(mapStateToProps, { init, login })(Login);
