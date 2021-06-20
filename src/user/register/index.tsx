import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { init, register } from "./slices/submit";
import { UserRegisterFormData } from "./types";

type Props = {
    error: ErrorStore;
    settled: IsLoadedStore;
    init(): void;
    register(values: UserRegisterFormData): void;
};

export const Register = (props: Props) => {
    const { error, settled, init, register } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, settled, onRedirect: init, url: "/profile" });

    return <Form onSubmit={register} formError={error} />;
};

const mapStateToProps = (store: Store) => ({ ...store.user.register.submit });

export default connect(mapStateToProps, { init, register })(Register);
