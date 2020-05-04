import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { init, passwordRecovery } from "./actions";
import Form from "./form";
import { IPasswordRecoveryErrorStore } from "./reducers/error";
import { IPasswordRecoveryIsSubmittedStore } from "./reducers/isSubmitted";
import { IPasswordRecovery } from "./types";

interface IProps {
    error: IPasswordRecoveryErrorStore;
    history: any;
    isSubmitted: IPasswordRecoveryIsSubmittedStore;
    passwordRecovery(values: IPasswordRecovery): void;
    init(): void;
}

export const PasswordRecovery = (props: IProps) => {
    const { error, history, isSubmitted, init, passwordRecovery } = props;

    React.useEffect(() => {
        init();
    }, []);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            init();
            history.push("/login");
        }
    }, [error, isSubmitted]);

    return <Form formError={error} onSubmit={passwordRecovery} />;
};

const mapStateToProps = ({ user }: IStore) => ({
    error: user.passwordRecovery.error,
    isSubmitted: user.passwordRecovery.isSubmitted,
});

export default connect(mapStateToProps, { passwordRecovery, init })(PasswordRecovery);
