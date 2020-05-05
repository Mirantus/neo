import { ChangePasswordAction } from "../actions";
import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR } from "../constants";

export type ChangePasswordErrorStore = string | null;

export const initialState = null;

export default (
    state: ChangePasswordErrorStore = initialState,
    action: ChangePasswordAction
): ChangePasswordErrorStore => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return initialState;

        case CHANGE_PASSWORD_ERROR:
            return action.payload;

        default:
            return state;
    }
};
