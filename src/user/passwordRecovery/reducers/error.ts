import { IPasswordRecoveryAction } from "../actions";
import { PASSWORD_RECOVERY, PASSWORD_RECOVERY_ERROR } from "../constants";

export type IPasswordRecoveryErrorStore = string | null;

export const initialState = null;

export default (
    state: IPasswordRecoveryErrorStore = initialState,
    action: IPasswordRecoveryAction
): IPasswordRecoveryErrorStore => {
    switch (action.type) {
        case PASSWORD_RECOVERY:
            return initialState;

        case PASSWORD_RECOVERY_ERROR:
            return action.payload;

        default:
            return state;
    }
};
