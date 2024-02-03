// @ts-nocheck
import React, { TextareaHTMLAttributes } from "react";
import { Field, FieldRenderProps } from "react-final-form";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & { name: string };

export const renderField = ({ input, meta: { touched, error } }: FieldRenderProps<Props>) => (
    <div className="control">
        <textarea id={input.name} className="textarea" {...input} />
        {touched && error && <p className="help is-danger">{error}</p>}
    </div>
);

export const Textarea = ({ name }: Props) => <Field name={name} component={renderField} />;

export default Textarea;
