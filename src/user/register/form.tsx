import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { IRegisterErrorStore } from "./reducers/error";
import { IUserRegister, IUserRegisterValidationErrors } from "./types";

interface IProps {
    formError: IRegisterErrorStore;
}

export const RegisterForm = (props: InjectedFormProps<IUserRegister> & IProps) => {
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

export const validate = (values: IUserRegister): IUserRegisterValidationErrors => {
    const errors: IUserRegisterValidationErrors = {};

    if (values.password !== values.password2) {
        errors.password2 = "Пароли должны совпадать";
    }

    return errors;
};

export default reduxForm<IUserRegister, any>({
    form: "reduxForm",
    validate,
})(RegisterForm);
