import { ILoginAction } from "../../login/actions";
import { LOGIN_OK } from "../../login/constants";
import { IRegisterAction } from "../../register/actions";
import { REGISTER_OK } from "../../register/constants";
import { IAuthAction } from "../actions";
import { AUTH, AUTH_ERROR, AUTH_OK, LOGOUT } from "../constants";

export type IAuthIsAuthorizedStore = boolean;

export const initialState = false;

export default (
    state: IAuthIsAuthorizedStore = initialState,
    action: ILoginAction | IAuthAction | IRegisterAction
): IAuthIsAuthorizedStore => {
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
