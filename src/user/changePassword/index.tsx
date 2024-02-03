import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import store from "../../store";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { ChangePasswordFormData } from "./types";

type Props = {
    error: ErrorStore;
    settled: IsLoadedStore;
    submit(values: ChangePasswordFormData): void;
    init(): void;
};

export const ChangePassword = (props: Props) => {
    const { error, settled, submit, init } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, settled, onRedirect: init, url: "/profile" });

    return <Form formError={error} onSubmit={submit} />;
};

export default observer(() => (
    <ChangePassword
        error={store.user.changePassword.submit.error}
        init={store.user.changePassword.submit.init}
        submit={store.user.changePassword.submit.submit}
        settled={store.user.changePassword.submit.settled}
    />
));
