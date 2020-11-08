import { set as setCookie } from "js-cookie";
import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { INIT } from "../../store/constants";
import { Action, ActionError } from "../../types";

import { REGISTER } from "./constants";
import { UserRegisterFormData } from "./types";

export type RegisterAction = Action | ActionError;

export const init = () => ({ type: REGISTER + INIT });

export const register = (values: UserRegisterFormData) => async (dispatch: Dispatch) => {
    await createFetch({
        actionType: REGISTER,
        data: values,
        method: "POST",
        okFactory: ({ token, user }) => {
            setCookie("token", String(token));
            return user;
        },
        url: "register/",
    })(dispatch);
};
