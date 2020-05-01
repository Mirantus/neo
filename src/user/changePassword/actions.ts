import { get as getCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError } from "../../types";
import { fetch } from "../../utils/api";
import { IChangePassword } from "./types";

export type IChangePasswordAction = IAction | IActionError;

import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_INIT, CHANGE_PASSWORD_OK } from "./constants";

export const init = () => ({ type: CHANGE_PASSWORD_INIT });

export const changePassword = (values: IChangePassword) => async (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_PASSWORD });

    try {
        const token = getCookie("token");
        await fetch("change_password/", "POST", { ...values, token });

        dispatch({
            payload: values,
            type: CHANGE_PASSWORD_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: CHANGE_PASSWORD_ERROR,
        });
    }
};
