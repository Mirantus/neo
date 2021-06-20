import classnames from "classnames";
import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { ErrorStore, IsLoadingStore } from "../../types";

import { ItemEditFormData } from "./types";

type Props = {
    formError: ErrorStore;
    pending: IsLoadingStore;
};

export const ItemsEditForm = (props: InjectedFormProps<ItemEditFormData> & Props) => {
    const { formError, pending, handleSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Редактирование</h1>
            <form onSubmit={handleSubmit}>
                <Field label="Текст" name="text">
                    <Textarea name="text" required />
                </Field>
                <div className="control">
                    <button className={classnames("button", "is-link", { "is-loading": pending })}>Сохранить</button>
                </div>
                {formError && <Error message={formError} />}
            </form>
        </div>
    );
};

export default reduxForm<ItemEditFormData, any>({
    form: "editForm",
})(ItemsEditForm);
