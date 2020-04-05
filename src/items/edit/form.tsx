import classnames from "classnames";
import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { IItem } from "../../types";
import { IEditErrorStore } from "./reducers/submit/error";
import { IEditIsSubmittingStore } from "./reducers/submit/isSubmitting";

type IValues = Pick<IItem, "text">;

interface IProps {
    formError: IEditErrorStore;
    isSubmitting: IEditIsSubmittingStore;
}

interface IValidationErrors {
    text?: string;
}

export const ItemsEditForm = (props: InjectedFormProps<IValues> & IProps) => {
    const { formError, isSubmitting, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Редактирование</h1>
            <form onSubmit={handleSubmit}>
                <Field label="Текст">
                    <Textarea name="text" />
                </Field>
                <div className="control">
                    <button className={classnames("button", "is-link", { "is-loading": isSubmitting })}>
                        Сохранить
                    </button>
                </div>
                {formError && <Error message={formError} />}
            </form>
        </div>
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
    form: "editForm",
    validate,
})(ItemsEditForm);
