import { LoginAction } from "../actions";
import { LOGIN, LOGIN_ERROR, LOGIN_OK } from "../constants";

export type LoginIsSubmittingStore = boolean;

export const initialState = false;

export default (state: LoginIsSubmittingStore = initialState, action: LoginAction): LoginIsSubmittingStore => {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGIN_OK:
        case LOGIN_ERROR:
            return initialState;
        default:
            return state;
    }
};
