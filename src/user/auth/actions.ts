import { get as getCookie, remove as removeCookie, set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { Action, ActionError } from "../../types";
import { fetch } from "../../utils/api";
import { AUTH, AUTH_ERROR, AUTH_OK, LOGOUT } from "./constants";
import { AuthResponse } from "./types";

export type AuthAction = Action | ActionError;

export const auth = () => async (dispatch: Dispatch) => {
    const token = getCookie("token");

    if (!token) {
        dispatch({ type: LOGOUT });
        return;
    }

    dispatch({ type: AUTH });

    try {
        const response = await fetch("auth/", "POST", { token });
        const { user, token: newToken } = response as AuthResponse;

        setCookie("token", String(newToken));

        dispatch({
            payload: user,
            type: AUTH_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: AUTH_ERROR,
        });
    }
};

export const logout = () => async (dispatch: Dispatch) => {
    const token = getCookie("token");
    removeCookie("token");
    dispatch({ type: LOGOUT });
    await fetch("logout", "POST", { token });
};
