import { set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { INIT } from "../../store/constants";
import { Action, ActionError } from "../../types";

import { LOGIN } from "./constants";
import { UserLoginFormData } from "./types";

export type LoginAction = Action | ActionError;

export const init = () => ({ type: LOGIN + INIT });

export const login = (values: UserLoginFormData) => async (dispatch: Dispatch) => {
    await createFetch({
        actionType: LOGIN,
        data: values,
        method: "POST",
        okFactory: ({ token, user }) => {
            setCookie("token", String(token));
            return user;
        },
        url: "login/",
    })(dispatch);
};
