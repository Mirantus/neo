import { Dispatch } from "redux";

import { messageShow } from "../../components/message/actions";
import { Action, ActionError } from "../../types";
import { fetch } from "../../utils/api";
import { PasswordRecoveryFormData } from "./types";

export type PasswordRecoveryAction = Action | ActionError;

import { PASSWORD_RECOVERY, PASSWORD_RECOVERY_ERROR, PASSWORD_RECOVERY_INIT, PASSWORD_RECOVERY_OK } from "./constants";

export const init = () => ({ type: PASSWORD_RECOVERY_INIT });

export const passwordRecovery = (values: PasswordRecoveryFormData) => async (dispatch: Dispatch) => {
    dispatch({ type: PASSWORD_RECOVERY });

    try {
        await fetch("password_recovery/", "GET", values);

        dispatch({
            payload: values,
            type: PASSWORD_RECOVERY_OK,
        });

        dispatch(messageShow("Новый пароль отправлен на указанный email", "success"));
    } catch (error) {
        dispatch({
            payload: error,
            type: PASSWORD_RECOVERY_ERROR,
        });
    }
};
