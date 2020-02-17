import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { IUser } from "../../types";
import { IRegisterErrorStore } from "./reducers/error";

interface IProps {
    formError: IRegisterErrorStore;
}

interface IValidationErrors {
    email?: string;
    password?: string;
    password2?: string;
}

export const RegisterForm = (props: InjectedFormProps<IUser> & IProps) => {
    const { formError, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Регистрация</h1>

            <form onSubmit={handleSubmit}>
                <Field label="Email">
                    <Input autoComplete="username" name="email" required={true} type="email" />
                </Field>
                <Field label="Пароль">
                    <Input autoComplete="new-password" name="password" required={true} type="password" />
                </Field>
                <Field label="Подтверждение пароля">
                    <Input autoComplete="new-password" name="password2" required={true} type="password" />
                </Field>
                <div className="control">
                    <button className="button is-link">Отправить</button>
                </div>
                {formError && <Error message={formError} />}
            </form>
        </div>
    );
};

export const validate = (values: IUser): IValidationErrors => {
    const errors: IValidationErrors = {};

    if (values.password !== values.password2) {
        errors.password2 = "Пароли должны совпадать";
    }

    return errors;
};

export default reduxForm<IUser, any>({
    form: "reduxForm",
    validate,
})(RegisterForm);
