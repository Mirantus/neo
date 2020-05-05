import * as React from "react";
import { connect } from "react-redux";

import { Store } from "../../store/reducers";
import { init, passwordRecovery } from "./actions";
import Form from "./form";
import { PasswordRecoveryErrorStore } from "./reducers/error";
import { PasswordRecoveryIsSubmittedStore } from "./reducers/isSubmitted";
import { PasswordRecoveryFormData } from "./types";

type Props = {
    error: PasswordRecoveryErrorStore;
    history: any;
    isSubmitted: PasswordRecoveryIsSubmittedStore;
    passwordRecovery(values: PasswordRecoveryFormData): void;
    init(): void;
};

export const PasswordRecovery = (props: Props) => {
    const { error, history, isSubmitted, init, passwordRecovery } = props;

    React.useEffect(() => {
        init();
    }, [init]);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            init();
            history.push("/login");
        }
    }, [error, history, init, isSubmitted]);

    return <Form formError={error} onSubmit={passwordRecovery} />;
};

const mapStateToProps = ({ user }: Store) => ({
    error: user.passwordRecovery.error,
    isSubmitted: user.passwordRecovery.isSubmitted,
});

export default connect(mapStateToProps, { passwordRecovery, init })(PasswordRecovery);
