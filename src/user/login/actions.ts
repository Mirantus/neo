import { set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError, IUser } from "../../types";
import { fetch } from "../../utils/api";

export type ILoginAction = IAction | IActionError;

import { LOGIN, LOGIN_ERROR, LOGIN_INIT, LOGIN_OK } from "./constants";

export const initLogin = () => ({ type: LOGIN_INIT });

export const login = (values: IUser) => async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN });

    try {
        const token = await fetch("login/", "POST", values);
        setCookie("token", String(token));

        dispatch({
            payload: { email: values.email },
            type: LOGIN_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: LOGIN_ERROR,
        });
    }
};
