import { ChangePasswordAction } from "../actions";
import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_OK } from "../constants";

export type ChangePasswordIsSubmittingStore = boolean;

export const initialState = false;

export default (
    state: ChangePasswordIsSubmittingStore = initialState,
    action: ChangePasswordAction
): ChangePasswordIsSubmittingStore => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return true;
        case CHANGE_PASSWORD_OK:
        case CHANGE_PASSWORD_ERROR:
            return initialState;
        default:
            return state;
    }
};
