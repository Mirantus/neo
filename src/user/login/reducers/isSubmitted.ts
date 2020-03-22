import { ILoginAction } from "../actions";
import { LOGIN, LOGIN_ERROR, LOGIN_INIT, LOGIN_OK } from "../constants";

export type ILoginIsSubmittedStore = boolean;

export const initialState = false;

export default (state: ILoginIsSubmittedStore = initialState, action: ILoginAction): ILoginIsSubmittedStore => {
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
