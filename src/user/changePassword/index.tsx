import * as React from "react";
import { connect } from "react-redux";

import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { Store } from "../../store/reducers";
import { changePassword, init } from "./actions";
import Form from "./form";
import { ChangePasswordFormData } from "./types";

type Props = {
    error: ErrorStore;
    history: any;
    isSubmitted: IsLoadedStore;
    changePassword(values: ChangePasswordFormData): void;
    init(): void;
};

export const ChangePassword = (props: Props) => {
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

const mapStateToProps = ({ user }: Store) => ({
    error: user.changePassword.error,
    isSubmitted: user.changePassword.isSubmitted,
});

export default connect(mapStateToProps, { changePassword, init })(ChangePassword);
