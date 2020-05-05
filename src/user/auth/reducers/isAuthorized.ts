import { LoginAction } from "../../login/actions";
import { LOGIN_OK } from "../../login/constants";
import { RegisterAction } from "../../register/actions";
import { REGISTER_OK } from "../../register/constants";
import { AuthAction } from "../actions";
import { AUTH, AUTH_ERROR, AUTH_OK, LOGOUT } from "../constants";

export type AuthIsAuthorizedStore = boolean;

export const initialState = false;

export default (
    state: AuthIsAuthorizedStore = initialState,
    action: LoginAction | AuthAction | RegisterAction
): AuthIsAuthorizedStore => {
    switch (action.type) {
        case LOGOUT:
        case AUTH:
        case AUTH_ERROR:
            return false;
        case LOGIN_OK:
        case REGISTER_OK:
        case AUTH_OK:
            return true;
        default:
            return state;
    }
};
