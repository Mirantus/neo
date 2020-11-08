import React from "react";
import { Link } from "react-router-dom";

import { ErrorStore } from "../../store/error";

import Form from "./form";
import { UserLoginFormData } from "./types";

type Props = {
    formError: ErrorStore;
    onSubmit(values: UserLoginFormData): void;
};

const LoginContent = (props: Props) => {
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
