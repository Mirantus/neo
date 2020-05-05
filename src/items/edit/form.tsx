import classnames from "classnames";
import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { EditErrorStore } from "./reducers/submit/error";
import { EditIsSubmittingStore } from "./reducers/submit/isSubmitting";
import { ItemEditFormData } from "./types";

type Props = {
    formError: EditErrorStore;
    isSubmitting: EditIsSubmittingStore;
};

export const ItemsEditForm = (props: InjectedFormProps<ItemEditFormData> & Props) => {
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

export default reduxForm<ItemEditFormData, any>({
    form: "editForm",
})(ItemsEditForm);
