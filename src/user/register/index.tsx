import * as React from "react";
import { connect } from "react-redux";

import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { Store } from "../../store/reducers";
import { init, register } from "./actions";
import Form from "./form";
import { UserRegisterFormData } from "./types";

type Props = {
    error: ErrorStore;
    history: any;
    isSubmitted: IsLoadedStore;
    init(): void;
    register(values: UserRegisterFormData): void;
};

export const Register = (props: Props) => {
    const { error, history, isSubmitted, init, register } = props;

    React.useEffect(() => {
        init();
    }, [init]);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            init();
            history.push("/profile");
        }
    }, [error, history, init, isSubmitted]);

    return <Form onSubmit={register} formError={error} />;
};

const mapStateToProps = (store: Store) => ({ ...store.user.register });

export default connect(mapStateToProps, { init, register })(Register);
