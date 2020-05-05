import { PasswordRecoveryAction } from "../actions";
import { PASSWORD_RECOVERY, PASSWORD_RECOVERY_ERROR } from "../constants";

export type PasswordRecoveryErrorStore = string | null;

export const initialState = null;

export default (
    state: PasswordRecoveryErrorStore = initialState,
    action: PasswordRecoveryAction
): PasswordRecoveryErrorStore => {
    switch (action.type) {
        case PASSWORD_RECOVERY:
            return initialState;

        case PASSWORD_RECOVERY_ERROR:
            return action.payload;

        default:
            return state;
    }
};
