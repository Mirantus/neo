import { get as getCookie, remove as removeCookie, set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError, IUser } from "../../types";
import { fetch } from "../../utils/api";
import { AUTH, AUTH_ERROR, AUTH_OK, LOGOUT } from "./constants";

export type IAuthAction = IAction | IActionError;

interface IResponse {
    user: IUser;
    token: string;
}

export const auth = () => async (dispatch: Dispatch) => {
    const token = getCookie("token");

    if (!token) {
        return;
    }

    dispatch({ type: AUTH });

    try {
        const response: IResponse | any = await fetch("auth/", "POST", { token });

        const user = response.user;
        const newToken = response.token;

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
