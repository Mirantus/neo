import React from "react";

type Props = {
    label: string;
    children: any;
};

const Field = ({ children, label }: Props) => (
    <div className="field">
        <label className="label">{label}</label>
        {children}
    </div>
);

export default Field;
