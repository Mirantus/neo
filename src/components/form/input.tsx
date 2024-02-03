// @ts-nocheck
import React, { InputHTMLAttributes } from "react";
import { Field, FieldRenderProps } from "react-final-form";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const renderField = (props: FieldRenderProps<Props>) => {
    const {
        input,
        meta: { touched, error },
        ...otherProps
    } = props;

    return (
        <div className="control">
            <input className="input" id={input.name} {...input} {...otherProps} />
            {touched && error && <p className="help is-danger">{error}</p>}
        </div>
    );
};

export const Input = (props: Props) => <Field {...props} component={renderField} />;

export default Input;
