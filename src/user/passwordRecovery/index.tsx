import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { init, passwordRecovery } from "./slice";
import { PasswordRecoveryFormData } from "./types";

type Props = {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    passwordRecovery(values: PasswordRecoveryFormData): void;
    init(): void;
};

export const PasswordRecovery = (props: Props) => {
    const { error, isSubmitted, init, passwordRecovery } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, isSubmitted, onRedirect: init, url: "/login" });

    return <Form formError={error} onSubmit={passwordRecovery} />;
};

const mapStateToProps = ({ user }: Store) => ({
    error: user.passwordRecovery.error,
    isSubmitted: user.passwordRecovery.isSubmitted,
});

export default connect(mapStateToProps, { init, passwordRecovery })(PasswordRecovery);
