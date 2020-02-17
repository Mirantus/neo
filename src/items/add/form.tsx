import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { IItem } from "../../types";
import { IAddErrorStore } from "./reducers/error";

type IValues = Pick<IItem, "text">;

interface IProps {
    formError: IAddErrorStore;
}

interface IValidationErrors {
    text?: string;
}

export const ItemsAddForm = (props: InjectedFormProps<IValues> & IProps) => {
    const { formError, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field label="Текст">
                <Textarea name="text" />
            </Field>
            <div className="control">
                <button className="button is-link">Добавить</button>
            </div>
            {formError && <Error message={formError} />}
        </form>
    );
};

export const validate = (values: IValues): IValidationErrors => {
    const errors: IValidationErrors = {};

    if (!values.text) {
        errors.text = "Поле обязательно для заполнения";
    }

    return errors;
};

export default reduxForm<IValues, any>({
    form: "addForm",
    validate,
})(ItemsAddForm);
