import { LoginAction } from "../actions";
import { LOGIN, LOGIN_ERROR, LOGIN_INIT, LOGIN_OK } from "../constants";

export type LoginIsSubmittedStore = boolean;

export const initialState = false;

export default (state: LoginIsSubmittedStore = initialState, action: LoginAction): LoginIsSubmittedStore => {
    switch (action.type) {
        case LOGIN_INIT:
        case LOGIN:
            return false;
        case LOGIN_OK:
        case LOGIN_ERROR:
            return true;
        default:
            return state;
    }
};
