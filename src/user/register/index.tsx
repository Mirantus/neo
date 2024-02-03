import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import store from "../../store";
import { ErrorStore, IsLoadedStore, User } from "../../types";

import Form from "./form";
import { UserRegisterFormData } from "./types";

type Props = {
    error: ErrorStore;
    settled: IsLoadedStore;
    init(): void;
    register(values: UserRegisterFormData, profile: User): void;
    profile: User;
};

export const Register = (props: Props) => {
    const { error, settled, init, register, profile } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, settled, onRedirect: init, url: "/profile" });

    const handleSubmit = (values: UserRegisterFormData) => {
        register(values, profile);
    };

    return <Form onSubmit={handleSubmit} formError={error} />;
};

export default observer(() => (
    <Register
        error={store.user.register.submit.error}
        init={store.user.register.submit.init}
        register={store.user.register.submit.register}
        settled={store.user.register.submit.settled}
        profile={store.user.profile}
    />
));
