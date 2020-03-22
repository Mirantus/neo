import { get as getCookie, remove as removeCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError } from "../../types";
import { fetch } from "../../utils/api";
import { LOGOUT } from "./constants";

export type IUserAuthAction = IAction | IActionError;

export const logout = () => async (dispatch: Dispatch) => {
    const token = getCookie("token");
    removeCookie("token");
    dispatch({ type: LOGOUT });
    await fetch("logout", "POST", { token });
};
