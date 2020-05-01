import { set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError } from "../../types";
import { fetch } from "../../utils/api";
import { IAuthResponse } from "../auth/types";
import { IUserRegister } from "./types";

export type IRegisterAction = IAction | IActionError;

import { REGISTER, REGISTER_ERROR, REGISTER_INIT, REGISTER_OK } from "./constants";

export const initRegister = () => ({ type: REGISTER_INIT });

export const register = (values: IUserRegister) => async (dispatch: Dispatch) => {
    dispatch({ type: REGISTER });

    try {
        const response = await fetch("register/", "POST", values);
        const { token, user } = response as IAuthResponse;
        setCookie("token", String(token));

        dispatch({
            payload: user,
            type: REGISTER_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: REGISTER_ERROR,
        });
    }
};
