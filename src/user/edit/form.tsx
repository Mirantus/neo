import React from "react";
import { Form, FormProps } from "react-final-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { ErrorStore } from "../../types";

import { UserEditFormData } from "./types";

type Props = {
    formError: ErrorStore;
};

export const UserEditForm = (props: FormProps<UserEditFormData> & Props) => {
    const { formError, initialValues, onSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Редактирование профиля</h1>

            <Form initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email" label="Email">
                            <Input autoComplete="username" name="email" required type="email" />
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

export default UserEditForm;
