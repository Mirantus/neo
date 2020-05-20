import { get as getCookie } from "js-cookie";
import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { INIT } from "../../store/constants";
import { CHANGE_PASSWORD } from "./constants";
import { ChangePasswordFormData } from "./types";

export const init = () => ({ type: CHANGE_PASSWORD + INIT });

export const changePassword = (values: ChangePasswordFormData) => async (dispatch: Dispatch) => {
    const token = getCookie("token");
    await createFetch({
        actionType: CHANGE_PASSWORD,
        data: { ...values, token },
        method: "POST",
        okFactory: () => values,
        url: "change_password/",
    })(dispatch);
};
