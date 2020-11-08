import React from "react";

type Props = {
    children: any;
    label: string;
    name?: string;
};

const Field = ({ children, label, name }: Props) => (
    <div className="field">
        <label className="label" htmlFor={name}>
            {label}
        </label>
        {children}
    </div>
);

export default Field;
