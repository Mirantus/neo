import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { UserEditErrorStore } from "./reducers/error";
import { UserEditFormData } from "./types";

type Props = {
    formError: UserEditErrorStore;
};

export const UserEditForm = (props: InjectedFormProps<UserEditFormData> & Props) => {
    const { formError, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Редактирование профиля</h1>

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

export default reduxForm<UserEditFormData, any>({ form: "reduxForm" })(UserEditForm);
