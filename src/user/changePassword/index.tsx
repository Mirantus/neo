import * as React from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { Store } from "../../store/reducers";
import { changePassword, init } from "./actions";
import Form from "./form";
import { ChangePasswordFormData } from "./types";

type Props = {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    changePassword(values: ChangePasswordFormData): void;
    init(): void;
};

export const ChangePassword = (props: Props) => {
    const { error, isSubmitted, changePassword, init } = props;

    React.useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, isSubmitted, onRedirect: init, url: "/profile" });

    return <Form formError={error} onSubmit={changePassword} />;
};

const mapStateToProps = ({ user }: Store) => ({
    error: user.changePassword.error,
    isSubmitted: user.changePassword.isSubmitted,
});

export default connect(mapStateToProps, { changePassword, init })(ChangePassword);
