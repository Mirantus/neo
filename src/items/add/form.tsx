import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { ErrorStore } from "../../store/error";

import { ItemAddFormData } from "./types";

type Props = {
    formError: ErrorStore;
};

export const ItemsAddForm = (props: InjectedFormProps<ItemAddFormData> & Props) => {
    const { formError, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field label="Текст" name="text">
                <Textarea name="text" required />
            </Field>
            <div className="control">
                <button className="button is-link">Добавить</button>
            </div>
            {formError && <Error message={formError} />}
        </form>
    );
};

export default reduxForm<ItemAddFormData, any>({
    form: "addForm",
})(ItemsAddForm);
