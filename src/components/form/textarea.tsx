import React from "react";
import { Field, WrappedFieldProps } from "redux-form";

interface IProps {
    name: string;
}

const renderField = ({ input, meta: { touched, error } }: WrappedFieldProps) => (
    <>
        <textarea {...input} />
        {touched && error && <div>{error}</div>}
    </>
);

export default ({ name }: IProps) => <Field name={name} component={renderField} />;
