import { LoginAction } from "../actions";
import { LOGIN, LOGIN_ERROR } from "../constants";

export type LoginErrorStore = string | null;

export const initialState = null;

export default (state: LoginErrorStore = initialState, action: LoginAction): LoginErrorStore => {
    switch (action.type) {
        case LOGIN:
            return initialState;

        case LOGIN_ERROR:
            return action.payload;

        default:
            return state;
    }
};
