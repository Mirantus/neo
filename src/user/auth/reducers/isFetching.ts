import { AuthAction } from "../actions";
import { AUTH, AUTH_ERROR, AUTH_OK, LOGOUT } from "../constants";

export type AuthIsFetchingStore = boolean;

export const initialState = true;

export default (state: AuthIsFetchingStore = initialState, action: AuthAction): AuthIsFetchingStore => {
    switch (action.type) {
        case AUTH:
            return true;
        case LOGOUT:
        case AUTH_ERROR:
        case AUTH_OK:
            return false;
        default:
            return state;
    }
};
