import { set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError } from "../../types";
import { fetch } from "../../utils/api";
import { IAuthResponse } from "../auth/types";
import { LOGIN, LOGIN_ERROR, LOGIN_INIT, LOGIN_OK } from "./constants";
import { IUserLogin } from "./types";

export type ILoginAction = IAction | IActionError;

export const initLogin = () => ({ type: LOGIN_INIT });

export const login = (values: IUserLogin) => async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN });

    try {
        const response = await fetch("login/", "POST", values);
        const { token, user } = response as IAuthResponse;
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
