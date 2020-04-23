import { get as getCookie, set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError, IUser } from "../../types";
import { fetch } from "../../utils/api";

export type IUserEditAction = IAction | IActionError;

import { USER_EDIT, USER_EDIT_ERROR, USER_EDIT_INIT, USER_EDIT_OK } from "./constants";

export const init = () => ({ type: USER_EDIT_INIT });

export const edit = (values: IUser) => async (dispatch: Dispatch) => {
    dispatch({ type: USER_EDIT });

    try {
        const token = getCookie("token");
        await fetch("user/edit/", "POST", { ...values, token });
        setCookie("token", String(token));

        dispatch({
            payload: { email: values.email },
            type: USER_EDIT_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: USER_EDIT_ERROR,
        });
    }
};
