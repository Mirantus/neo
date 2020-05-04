import { IPasswordRecoveryAction } from "../actions";
import { PASSWORD_RECOVERY, PASSWORD_RECOVERY_ERROR, PASSWORD_RECOVERY_OK } from "../constants";

export type IPasswordRecoveryIsSubmittingStore = boolean;

export const initialState = false;

export default (
    state: IPasswordRecoveryIsSubmittingStore = initialState,
    action: IPasswordRecoveryAction
): IPasswordRecoveryIsSubmittingStore => {
    switch (action.type) {
        case PASSWORD_RECOVERY:
            return true;
        case PASSWORD_RECOVERY_OK:
        case PASSWORD_RECOVERY_ERROR:
            return initialState;
        default:
            return state;
    }
};
