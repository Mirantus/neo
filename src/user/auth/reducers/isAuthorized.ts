import { ERROR, OK } from "../../../store/constants";
import { LoginAction } from "../../login/actions";
import { LOGIN } from "../../login/constants";
import { RegisterAction } from "../../register/actions";
import { REGISTER } from "../../register/constants";
import { AuthAction } from "../actions";
import { AUTH, LOGOUT } from "../constants";

export type AuthIsAuthorizedStore = boolean;

export const initialState = false;

export default (
    state: AuthIsAuthorizedStore = initialState,
    action: LoginAction | AuthAction | RegisterAction
): AuthIsAuthorizedStore => {
    switch (action.type) {
        case LOGOUT:
        case AUTH:
        case AUTH + ERROR:
            return false;
        case LOGIN + OK:
        case REGISTER + OK:
        case AUTH + OK:
            return true;
        default:
            return state;
    }
};
