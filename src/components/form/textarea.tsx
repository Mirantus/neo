import React, { TextareaHTMLAttributes } from "react";
import { Field, WrappedFieldProps } from "redux-form";

type IProps = TextareaHTMLAttributes<HTMLInputElement>;

export const renderField = ({ input, meta: { touched, error } }: WrappedFieldProps) => (
    <div className="control">
        <textarea className="textarea" {...input} />
        {touched && error && <p className="help is-danger">{error}</p>}
    </div>
);

export const Textarea = ({ name }: IProps) => <Field name={name} component={renderField} />;

export default Textarea;
