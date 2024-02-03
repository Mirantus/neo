import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import store from "../../store";
import { ErrorStore, IsLoadedStore, User } from "../../types";

import Form from "./form";
import { UserEditFormData } from "./types";

type Props = {
    error: ErrorStore;
    settled: IsLoadedStore;
    submit(values: UserEditFormData, profile: User): void;
    init(): void;
    profile: User;
};

export const UserEdit = (props: Props) => {
    const { error, settled, init, submit, profile } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, settled, onRedirect: init, url: "/profile" });

    const handleSubmit = (values: UserEditFormData) => {
        submit(values, profile);
    };

    return <Form formError={error} initialValues={{ email: profile.email }} onSubmit={handleSubmit} />;
};

export default observer(() => (
    <UserEdit
        error={store.user.edit.submit.error}
        init={store.user.edit.submit.init}
        submit={store.user.edit.submit.submit}
        settled={store.user.edit.submit.settled}
        profile={store.user.profile}
    />
));
