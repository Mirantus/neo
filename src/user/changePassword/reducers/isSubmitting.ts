import { IChangePasswordAction } from "../actions";
import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_OK } from "../constants";

export type IChangePasswordIsSubmittingStore = boolean;

export const initialState = false;

export default (
    state: IChangePasswordIsSubmittingStore = initialState,
    action: IChangePasswordAction
): IChangePasswordIsSubmittingStore => {
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
