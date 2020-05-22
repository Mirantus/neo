import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { Store } from "../../store/reducers";
import { init, register } from "./actions";
import Form from "./form";
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
