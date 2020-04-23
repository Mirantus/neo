import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { IUser } from "../../types";
import { IUserEditErrorStore } from "./reducers/error";

interface IProps {
    formError: IUserEditErrorStore;
}

export const UserEditForm = (props: InjectedFormProps<IUser> & IProps) => {
    const { formError, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Редактирование профиля</h1>

            <form onSubmit={handleSubmit}>
                <Field label="Email">
                    <Input autoComplete="username" name="email" required={true} type="email" />
                </Field>
                <div className="control">
                    <button className="button is-link">Отправить</button>
                </div>
                {formError && <Error message={formError} />}
            </form>
        </div>
    );
};

export default reduxForm<IUser, any>({ form: "reduxForm" })(UserEditForm);
