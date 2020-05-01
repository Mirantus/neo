import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { IAddErrorStore } from "./reducers/error";
import { IItemAdd } from "./types";

interface IProps {
    formError: IAddErrorStore;
}

export const ItemsAddForm = (props: InjectedFormProps<IItemAdd> & IProps) => {
    const { formError, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field label="Текст">
                <Textarea name="text" required={true} />
            </Field>
            <div className="control">
                <button className="button is-link">Добавить</button>
            </div>
            {formError && <Error message={formError} />}
        </form>
    );
};

export default reduxForm<IItemAdd, any>({
    form: "addForm",
})(ItemsAddForm);
