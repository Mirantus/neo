import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { IUser } from "../../types";
import { initLogin, login } from "./actions";
import Content from "./content";
import { ILoginErrorStore } from "./reducers/error";
import { ILoginIsSubmittedStore } from "./reducers/isSubmitted";

interface IProps {
    error: ILoginErrorStore;
    history: any;
    isSubmitted: ILoginIsSubmittedStore;
    initLogin(): void;
    login(values: IUser): void;
}

export const Login = (props: IProps) => {
    const { error, history, isSubmitted, initLogin, login } = props;

    React.useEffect(() => {
        initLogin();
    }, []);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            history.push("/profile");
        }
    }, [error, isSubmitted]);

    return <Content onSubmit={login} formError={error} />;
};

const mapStateToProps = (store: IStore) => ({ ...store.user.login });

export default connect(mapStateToProps, { initLogin, login })(Login);
