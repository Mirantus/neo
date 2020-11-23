import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { init, register } from "./slice";
import { UserRegisterFormData } from "./types";

type Props = {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    init(): void;
    register(values: UserRegisterFormData): void;
};

export const Register = (props: Props) => {
    const { error, isSubmitted, init, register } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, isSubmitted, onRedirect: init, url: "/profile" });

    return <Form onSubmit={register} formError={error} />;
};

const mapStateToProps = (store: Store) => ({ ...store.user.register });

export default connect(mapStateToProps, { init, register })(Register);
