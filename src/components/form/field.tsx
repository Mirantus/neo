import React from "react";

interface IProps {
    label: string;
    children: any;
}

const Field = ({ children, label }: IProps) => (
    <div>
        <label>{label}</label>
        <div>{children}</div>
    </div>
);

export default Field;
