import { ILoginAction } from "../actions";
import { LOGIN, LOGIN_ERROR, LOGIN_OK } from "../constants";

export type ILoginIsSubmittingStore = boolean;

export const initialState = false;

export default (state: ILoginIsSubmittingStore = initialState, action: ILoginAction): ILoginIsSubmittingStore => {
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
