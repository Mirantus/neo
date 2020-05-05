import { get as getCookie } from "js-cookie";
import { Dispatch } from "redux";

import { Action, ActionError } from "../../types";
import { fetch } from "../../utils/api";
import { UserEditFormData } from "./types";

export type UserEditAction = Action | ActionError;

import { USER_EDIT, USER_EDIT_ERROR, USER_EDIT_INIT, USER_EDIT_OK } from "./constants";

export const init = () => ({ type: USER_EDIT_INIT });

export const edit = (values: UserEditFormData) => async (dispatch: Dispatch) => {
    dispatch({ type: USER_EDIT });

    try {
        const token = getCookie("token");
        const user = await fetch("user/edit/", "POST", { ...values, token });

        dispatch({
            payload: user,
            type: USER_EDIT_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: USER_EDIT_ERROR,
        });
    }
};
