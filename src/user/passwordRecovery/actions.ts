import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { INIT } from "../../store/constants";
import { messageShow } from "../../components/message/actions";
import { PASSWORD_RECOVERY } from "./constants";
import { PasswordRecoveryFormData } from "./types";

export const init = () => ({ type: PASSWORD_RECOVERY + INIT });

export const passwordRecovery = (values: PasswordRecoveryFormData) => async (dispatch: Dispatch) => {
    await createFetch({
        actionType: PASSWORD_RECOVERY,
        data: values,
        okFactory: () => {
            dispatch(messageShow("Новый пароль отправлен на указанный email", "success"));
            return values;
        },
        url: "password_recovery/",
    })(dispatch);
};
