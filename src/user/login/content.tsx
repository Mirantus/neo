import React from "react";
import { Link } from "react-router-dom";

import Form from "./form";
import { ILoginErrorStore } from "./reducers/error";
import { IUserLogin } from "./types";

interface IProps {
    formError: ILoginErrorStore;
    onSubmit(values: IUserLogin): void;
}

const LoginContent = (props: IProps) => {
    const { formError, onSubmit } = props;

    return (
        <div className="container">
            <h1 className="title">Вход</h1>
            <div className="content">
                <Form formError={formError} onSubmit={onSubmit} />
            </div>
            <div className="content">
                <Link to="/password_recovery">Забыли пароль?</Link>
            </div>
            <div className="content">
                <Link to="/register">Регистрация</Link>
            </div>
        </div>
    );
};

export default LoginContent;
