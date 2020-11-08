import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { ErrorStore } from "../../store/error";
import { UserLoginFormData } from "./types";

type Props = {
    formError: ErrorStore;
};

export const LoginForm = (props: InjectedFormProps<UserLoginFormData> & Props) => {
    const { formError, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field label="Email" name="email">
                <Input autoComplete="username" name="email" required type="email" />
            </Field>
            <Field label="Пароль" name="password">
                <Input autoComplete="new-password" name="password" required type="password" />
            </Field>
            <div className="control">
                <button className="button is-link">Отправить</button>
            </div>
            {formError && <Error message={formError} />}
        </form>
    );
};

export default reduxForm<UserLoginFormData, any>({
    form: "reduxForm",
})(LoginForm);
