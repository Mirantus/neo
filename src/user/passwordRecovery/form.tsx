import React from "react";
import { Form, FormProps } from "react-final-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Input from "../../components/form/input";
import { ErrorStore } from "../../types";

import { PasswordRecoveryFormData } from "./types";

type Props = {
    formError: ErrorStore;
};

export const PasswordRecoveryForm = (props: FormProps<PasswordRecoveryFormData> & Props) => {
    const { formError, onSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Восстановление пароля</h1>

            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field label="Email" name="email">
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

export default PasswordRecoveryForm;
