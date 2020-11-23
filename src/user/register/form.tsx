import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { ErrorStore } from "../../types";

import { UserRegisterFormData, UserRegisterValidationErrors } from "./types";

type Props = {
    formError: ErrorStore;
};

export const RegisterForm = (props: InjectedFormProps<UserRegisterFormData> & Props) => {
    const { formError, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Регистрация</h1>

            <form onSubmit={handleSubmit}>
                <Field name="email" label="Email">
                    <Input autoComplete="username" name="email" required type="email" />
                </Field>
                <Field name="password" label="Пароль">
                    <Input autoComplete="new-password" name="password" required type="password" />
                </Field>
                <Field name="password2" label="Подтверждение пароля">
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

export const validate = (values: UserRegisterFormData): UserRegisterValidationErrors => {
    const errors: UserRegisterValidationErrors = {};

    if (values.password !== values.password2) {
        errors.password2 = "Пароли должны совпадать";
    }

    return errors;
};

export default reduxForm<UserRegisterFormData, any>({
    form: "reduxForm",
    validate,
})(RegisterForm);
