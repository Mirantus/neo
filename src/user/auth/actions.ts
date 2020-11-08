import { get as getCookie, remove as removeCookie, set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { Action, ActionError } from "../../types";
import { fetch } from "../../utils/api";

import { AUTH, LOGOUT } from "./constants";
import { AuthResponse } from "./types";

export type AuthAction = Action | ActionError;

export const auth = () => async (dispatch: Dispatch) => {
    const token = getCookie("token");

    if (!token) {
        dispatch({ type: LOGOUT });
        return;
    }

    await createFetch({
        actionType: AUTH,
        data: { token },
        method: "POST",
        okFactory: (response) => {
            const { user, token: newToken } = response as AuthResponse;
            setCookie("token", String(newToken));
            return user;
        },
        url: "auth/",
    })(dispatch);
};

export const logout = () => async (dispatch: Dispatch) => {
    const token = getCookie("token");
    removeCookie("token");
    dispatch({ type: LOGOUT });
    await fetch("logout", "POST", { token });
};
