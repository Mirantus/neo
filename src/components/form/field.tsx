import React from "react";

type IProps = {
    label: string;
    children: any;
};

const Field = ({ children, label }: IProps) => (
    <div className="field">
        <label className="label">{label}</label>
        {children}
    </div>
);

export default Field;
