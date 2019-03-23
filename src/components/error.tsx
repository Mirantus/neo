import React from "react";

import { IError } from "../types";

const Error = (props: IError) => <div>Ошибка: {props.message || "нет данных"}</div>;

export default Error;
