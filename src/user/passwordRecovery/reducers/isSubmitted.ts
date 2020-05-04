import { IPasswordRecoveryAction } from "../actions";
import { PASSWORD_RECOVERY, PASSWORD_RECOVERY_ERROR, PASSWORD_RECOVERY_INIT, PASSWORD_RECOVERY_OK } from "../constants";

export type IPasswordRecoveryIsSubmittedStore = boolean;

export const initialState = false;

export default (
    state: IPasswordRecoveryIsSubmittedStore = initialState,
    action: IPasswordRecoveryAction
): IPasswordRecoveryIsSubmittedStore => {
    switch (action.type) {
        case PASSWORD_RECOVERY_INIT:
        case PASSWORD_RECOVERY:
            return false;
        case PASSWORD_RECOVERY_OK:
        case PASSWORD_RECOVERY_ERROR:
            return true;
        default:
            return state;
    }
};
