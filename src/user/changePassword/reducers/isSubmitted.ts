import { IChangePasswordAction } from "../actions";
import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_INIT, CHANGE_PASSWORD_OK } from "../constants";

export type IChangePasswordIsSubmittedStore = boolean;

export const initialState = false;

export default (
    state: IChangePasswordIsSubmittedStore = initialState,
    action: IChangePasswordAction
): IChangePasswordIsSubmittedStore => {
    switch (action.type) {
        case CHANGE_PASSWORD_INIT:
        case CHANGE_PASSWORD:
            return false;
        case CHANGE_PASSWORD_OK:
        case CHANGE_PASSWORD_ERROR:
            return true;
        default:
            return state;
    }
};
