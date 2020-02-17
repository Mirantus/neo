import { set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError, IUser } from "../../types";
import { fetch } from "../../utils/api";

export type IRegisterAction = IAction | IActionError;

import { REGISTER, REGISTER_ERROR, REGISTER_INIT, REGISTER_OK } from "./constants";

export const initRegister = () => ({ type: REGISTER_INIT });

export const register = (values: IUser) => async (dispatch: Dispatch) => {
    dispatch({ type: REGISTER });

    try {
        const token = await fetch("register/", "POST", values);
        setCookie("token", String(token));

        dispatch({
            payload: { email: values.email },
            type: REGISTER_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: REGISTER_ERROR,
        });
    }
};
