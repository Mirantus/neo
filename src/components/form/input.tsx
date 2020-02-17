import React, { InputHTMLAttributes } from "react";
import { Field, WrappedFieldProps } from "redux-form";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const renderField = (props: WrappedFieldProps) => {
    const {
        input,
        meta: { touched, error },
        ...otherProps
    } = props;

    return (
        <div className="control">
            <input className="input" {...input} {...otherProps} />
            {touched && error && <p className="help is-danger">{error}</p>}
        </div>
    );
};

export const Input = (props: IProps) => <Field {...props} component={renderField} />;

export default Input;
