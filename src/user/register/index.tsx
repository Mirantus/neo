import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { IUser } from "../../types";
import { initRegister, register } from "./actions";
import Form from "./form";
import { IRegisterErrorStore } from "./reducers/error";
import { IRegisterIsSubmittedStore } from "./reducers/isSubmitted";

interface IProps {
    error: IRegisterErrorStore;
    history: any;
    isSubmitted: IRegisterIsSubmittedStore;
    initRegister(): void;
    register(values: IUser): void;
}

export const Register = (props: IProps) => {
    const { error, history, isSubmitted, initRegister, register } = props;

    React.useEffect(() => {
        initRegister();
    }, []);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            history.push("/profile");
        }
    }, [error, isSubmitted]);

    return <Form onSubmit={register} formError={error} />;
};

const mapStateToProps = (store: IStore) => ({ ...store.user.register });

export default connect(
    mapStateToProps,
    { initRegister, register }
)(Register);
