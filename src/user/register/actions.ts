import { set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { Action, ActionError } from "../../types";
import { fetch } from "../../utils/api";
import { AuthResponse } from "../auth/types";
import { UserRegisterFormData } from "./types";

export type RegisterAction = Action | ActionError;

import { REGISTER, REGISTER_ERROR, REGISTER_INIT, REGISTER_OK } from "./constants";

export const initRegister = () => ({ type: REGISTER_INIT });

export const register = (values: UserRegisterFormData) => async (dispatch: Dispatch) => {
    dispatch({ type: REGISTER });

    try {
        const response = await fetch("register/", "POST", values);
        const { token, user } = response as AuthResponse;
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
