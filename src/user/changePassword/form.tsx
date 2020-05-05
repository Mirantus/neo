import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { ChangePasswordErrorStore } from "./reducers/error";
import { ChangePasswordFormData, ChangePasswordValidationErrors } from "./types";

type Props = {
    formError: ChangePasswordErrorStore;
};

export const ChangePasswordForm = (props: InjectedFormProps<ChangePasswordFormData> & Props) => {
    const { formError, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Изменение пароля</h1>

            <form onSubmit={handleSubmit}>
                <Field label="Старый пароль">
                    <Input autoComplete="current-password" name="current_password" required type="password" />
                </Field>
                <Field label="Пароль">
                    <Input autoComplete="new-password" name="password" required type="password" />
                </Field>
                <Field label="Подтверждение пароля">
                    <Input autoComplete="new-password" name="password2" required type="password" />
                </Field>
                <div className="control">
                    <button className="button is-link">Отправить</button>
                </div>
                {formError && <Error message={formError} />}
            </form>
        </div>
    );
};

export const validate = (values: ChangePasswordFormData): ChangePasswordValidationErrors => {
    const errors: ChangePasswordValidationErrors = {};

    if (values.password !== values.password2) {
        errors.password2 = "Пароль и подтверждение должны совпадать";
    }

    return errors;
};

export default reduxForm<ChangePasswordFormData, any>({ form: "reduxForm", validate })(ChangePasswordForm);
