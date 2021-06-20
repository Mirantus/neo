import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { changePassword, init } from "./slices/submit";
import { ChangePasswordFormData } from "./types";

type Props = {
    error: ErrorStore;
    settled: IsLoadedStore;
    changePassword(values: ChangePasswordFormData): void;
    init(): void;
};

export const ChangePassword = (props: Props) => {
    const { error, settled, changePassword, init } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, settled, onRedirect: init, url: "/profile" });

    return <Form formError={error} onSubmit={changePassword} />;
};

const mapStateToProps = ({ user }: Store) => ({
    error: user.changePassword.submit.error,
    settled: user.changePassword.submit.settled,
});

export default connect(mapStateToProps, { changePassword, init })(ChangePassword);
