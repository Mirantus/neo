import { ERROR, OK } from "../../../store/constants";
import { AuthAction } from "../actions";
import { AUTH, LOGOUT } from "../constants";

export type AuthIsFetchingStore = boolean;

export const initialState = true;

export default (state: AuthIsFetchingStore = initialState, action: AuthAction): AuthIsFetchingStore => {
    switch (action.type) {
        case AUTH:
            return true;
        case LOGOUT:
        case AUTH + ERROR:
        case AUTH + OK:
            return false;
        default:
            return state;
    }
};
