import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { IUserEditErrorStore } from "./reducers/error";
import { IUserEdit } from "./types";

type IProps = {
    formError: IUserEditErrorStore;
};

export const UserEditForm = (props: InjectedFormProps<IUserEdit> & IProps) => {
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

export default reduxForm<IUserEdit, any>({ form: "reduxForm" })(UserEditForm);
