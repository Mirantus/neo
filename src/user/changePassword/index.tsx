import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { changePassword, init } from "./actions";
import Form from "./form";
import { IChangePasswordErrorStore } from "./reducers/error";
import { IChangePasswordIsSubmittedStore } from "./reducers/isSubmitted";
import { IChangePassword } from "./types";

type IProps = {
    error: IChangePasswordErrorStore;
    history: any;
    isSubmitted: IChangePasswordIsSubmittedStore;
    changePassword(values: IChangePassword): void;
    init(): void;
};

export const ChangePassword = (props: IProps) => {
    const { error, history, isSubmitted, changePassword, init } = props;

    React.useEffect(() => {
        init();
    }, [init]);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            init();
            history.push("/profile");
        }
    }, [error, history, init, isSubmitted]);

    return <Form formError={error} onSubmit={changePassword} />;
};

const mapStateToProps = ({ user }: IStore) => ({
    error: user.changePassword.error,
    isSubmitted: user.changePassword.isSubmitted,
});

export default connect(mapStateToProps, { changePassword, init })(ChangePassword);
