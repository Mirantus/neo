import React from "react";
import { Form, FormProps } from "react-final-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { ErrorStore } from "../../types";

import { UserRegisterFormData, UserRegisterValidationErrors } from "./types";

type Props = {
    formError: ErrorStore;
};

export const validate = (values: UserRegisterFormData): UserRegisterValidationErrors => {
    const errors: UserRegisterValidationErrors = {};

    if (values.password !== values.password2) {
        errors.password2 = "Пароли должны совпадать";
    }

    return errors;
};

export const RegisterForm = (props: FormProps<UserRegisterFormData> & Props) => {
    const { formError, onSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Регистрация</h1>

            <Form onSubmit={onSubmit} validate={validate}>
                {({ handleSubmit }) => (
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
                )}
            </Form>
        </div>
    );
};

export default RegisterForm;
