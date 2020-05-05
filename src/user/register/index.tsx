import * as React from "react";
import { connect } from "react-redux";

import { Store } from "../../store/reducers";
import { initRegister, register } from "./actions";
import Form from "./form";
import { RegisterErrorStore } from "./reducers/error";
import { RegisterIsSubmittedStore } from "./reducers/isSubmitted";
import { UserRegisterFormData } from "./types";

type Props = {
    error: RegisterErrorStore;
    history: any;
    isSubmitted: RegisterIsSubmittedStore;
    initRegister(): void;
    register(values: UserRegisterFormData): void;
};

export const Register = (props: Props) => {
    const { error, history, isSubmitted, initRegister, register } = props;

    React.useEffect(() => {
        initRegister();
    }, [initRegister]);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            initRegister();
            history.push("/profile");
        }
    }, [error, history, initRegister, isSubmitted]);

    return <Form onSubmit={register} formError={error} />;
};

const mapStateToProps = (store: Store) => ({ ...store.user.register });

export default connect(mapStateToProps, { initRegister, register })(Register);
