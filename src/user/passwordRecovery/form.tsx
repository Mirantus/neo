import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { PasswordRecoveryErrorStore } from "./reducers/error";
import { PasswordRecoveryFormData } from "./types";

type Props = {
    formError: PasswordRecoveryErrorStore;
};

export const PasswordRecoveryForm = (props: InjectedFormProps<PasswordRecoveryFormData> & Props) => {
    const { formError, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Восстановление пароля</h1>

            <form onSubmit={handleSubmit}>
                <Field label="Email">
                    <Input autoComplete="username" name="email" required type="email" />
                </Field>
                <div className="control">
                    <button className="button is-link">Отправить</button>
                </div>
                {formError && <Error message={formError} />}
            </form>
        </div>
    );
};

export default reduxForm<PasswordRecoveryFormData, any>({ form: "reduxForm" })(PasswordRecoveryForm);
