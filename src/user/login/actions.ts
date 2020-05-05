import { set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { Action, ActionError } from "../../types";
import { fetch } from "../../utils/api";
import { AuthResponse } from "../auth/types";
import { LOGIN, LOGIN_ERROR, LOGIN_INIT, LOGIN_OK } from "./constants";
import { UserLoginFormData } from "./types";

export type LoginAction = Action | ActionError;

export const initLogin = () => ({ type: LOGIN_INIT });

export const login = (values: UserLoginFormData) => async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN });

    try {
        const response = await fetch("login/", "POST", values);
        const { token, user } = response as AuthResponse;
        setCookie("token", String(token));

        dispatch({
            payload: user,
            type: LOGIN_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: LOGIN_ERROR,
        });
    }
};
