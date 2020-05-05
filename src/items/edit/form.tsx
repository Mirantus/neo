import classnames from "classnames";
import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { IEditErrorStore } from "./reducers/submit/error";
import { IEditIsSubmittingStore } from "./reducers/submit/isSubmitting";
import { IItemEdit } from "./types";

type IProps = {
    formError: IEditErrorStore;
    isSubmitting: IEditIsSubmittingStore;
};

export const ItemsEditForm = (props: InjectedFormProps<IItemEdit> & IProps) => {
    const { formError, isSubmitting, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Редактирование</h1>
            <form onSubmit={handleSubmit}>
                <Field label="Текст">
                    <Textarea name="text" required />
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

export default reduxForm<IItemEdit, any>({
    form: "editForm",
})(ItemsEditForm);
