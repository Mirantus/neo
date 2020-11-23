import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { changePassword, init } from "./slice";
import { ChangePasswordFormData } from "./types";

type Props = {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    changePassword(values: ChangePasswordFormData): void;
    init(): void;
};

export const ChangePassword = (props: Props) => {
    const { error, isSubmitted, changePassword, init } = props;

    useEffect(() => {
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
