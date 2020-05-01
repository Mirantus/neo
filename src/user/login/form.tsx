import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { ILoginErrorStore } from "./reducers/error";
import { IUserLogin } from "./types";

interface IProps {
    formError: ILoginErrorStore;
}

export const LoginForm = (props: InjectedFormProps<IUserLogin> & IProps) => {
    const { formError, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field label="Email">
                <Input autoComplete="username" name="email" required={true} type="email" />
            </Field>
            <Field label="Пароль">
                <Input autoComplete="new-password" name="password" required={true} type="password" />
            </Field>
            <div className="control">
                <button className="button is-link">Отправить</button>
            </div>
            {formError && <Error message={formError} />}
        </form>
    );
};

export default reduxForm<IUserLogin, any>({
    form: "reduxForm",
})(LoginForm);
