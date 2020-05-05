import { AuthAction } from "../actions";
import { AUTH, AUTH_ERROR, LOGOUT } from "../constants";

export type AuthErrorStore = string | null;

export const initialState = null;

export default (state: AuthErrorStore = initialState, action: AuthAction): AuthErrorStore => {
    switch (action.type) {
        case LOGOUT:
        case AUTH:
            return initialState;

        case AUTH_ERROR:
            return action.payload;

        default:
            return state;
    }
};
