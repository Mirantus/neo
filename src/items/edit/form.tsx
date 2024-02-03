import classnames from "classnames";
import React from "react";
import { Form, FormProps } from "react-final-form";

import Error from "../../components/error";
import Field from "../../components/form/field";
import Textarea from "../../components/form/textarea";
import { ErrorStore, IsLoadingStore } from "../../types";

import { ItemEditFormData } from "./types";

type Props = {
    formError: ErrorStore;
    pending: IsLoadingStore;
};

export const ItemsEditForm = (props: FormProps<ItemEditFormData> & Props) => {
    const { formError, initialValues, pending, onSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Редактирование</h1>
            <Form initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field label="Текст" name="text">
                            <Textarea name="text" required />
                        </Field>
                        <div className="control">
                            <button className={classnames("button", "is-link", { "is-loading": pending })}>
                                Сохранить
                            </button>
                        </div>
                        {formError && <Error message={formError} />}
                    </form>
                )}
            </Form>
        </div>
    );
};

export default ItemsEditForm;
