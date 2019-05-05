import React from "react";

import { IError } from "../types";

const Error = (props: IError) => <p className="help is-danger">Ошибка: {props.message || "нет данных"}</p>;

export default Error;
