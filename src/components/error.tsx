import React from "react";

type IProps = {
    message: string;
};

const Error = (props: IProps) => <p className="help is-danger">Ошибка: {props.message || "нет данных"}</p>;

export default Error;
