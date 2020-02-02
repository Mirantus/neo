import React from "react";
import { Link } from "react-router-dom";

const LoginContent = () => {
    return (
        <div className="container">
            <h1 className="title">Вход</h1>
            <p>
                <Link to="/register">Регистрация</Link>
            </p>
        </div>
    );
};

export default LoginContent;
