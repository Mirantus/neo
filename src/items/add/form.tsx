import React from "react";
import { Form, FormProps } from "react-final-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { ErrorStore } from "../../types";

import { ItemAddFormData } from "./types";

type Props = {
    formError: ErrorStore;
};

export const ItemsAddForm = (props: FormProps<ItemAddFormData> & Props) => {
    const { formError } = props;

    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field label="Текст" name="text">
                        <Textarea name="text" required />
                    </Field>
                    <div className="control">
                        <button className="button is-link">Добавить</button>
                    </div>
                    {formError && <Error message={formError} />}
                </form>
            )}
        </Form>
    );
};

export default ItemsAddForm;
