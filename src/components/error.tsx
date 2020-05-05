import React from "react";

type Props = {
    message: string;
};

const Error = (props: Props) => <p className="help is-danger">Ошибка: {props.message || "нет данных"}</p>;

export default Error;
