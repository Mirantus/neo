import * as React from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { Store } from "../../store/reducers";
import { init, passwordRecovery } from "./actions";
import Form from "./form";
import { PasswordRecoveryFormData } from "./types";

type Props = {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    passwordRecovery(values: PasswordRecoveryFormData): void;
    init(): void;
};

export const PasswordRecovery = (props: Props) => {
    const { error, isSubmitted, init, passwordRecovery } = props;

    React.useEffect(() => {
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
