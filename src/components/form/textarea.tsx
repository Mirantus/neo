import React from "react";
import { Field, WrappedFieldProps } from "redux-form";

interface IProps {
    name: string;
}

const renderField = ({ input, meta: { touched, error } }: WrappedFieldProps) => (
    <div className="control">
        <textarea className="textarea" {...input} />
        {touched && error && <p className="help is-danger">{error}</p>}
    </div>
);

export default ({ name }: IProps) => <Field name={name} component={renderField} />;
