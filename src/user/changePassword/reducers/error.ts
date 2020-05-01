import { IChangePasswordAction } from "../actions";
import { CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR } from "../constants";

export type IChangePasswordErrorStore = string | null;

export const initialState = null;

export default (
    state: IChangePasswordErrorStore = initialState,
    action: IChangePasswordAction
): IChangePasswordErrorStore => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return initialState;

        case CHANGE_PASSWORD_ERROR:
            return action.payload;

        default:
            return state;
    }
};
