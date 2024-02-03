import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import store from "../../store";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { PasswordRecoveryFormData } from "./types";

type Props = {
    error: ErrorStore;
    settled: IsLoadedStore;
    submit(values: PasswordRecoveryFormData): void;
    init(): void;
};

export const PasswordRecovery = (props: Props) => {
    const { error, settled, init, submit } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, settled, onRedirect: init, url: "/login" });

    return <Form formError={error} onSubmit={submit} />;
};

export default observer(() => (
    <PasswordRecovery
        error={store.user.passwordRecovery.submit.error}
        init={store.user.passwordRecovery.submit.init}
        submit={store.user.passwordRecovery.submit.submit}
        settled={store.user.passwordRecovery.submit.settled}
    />
));
