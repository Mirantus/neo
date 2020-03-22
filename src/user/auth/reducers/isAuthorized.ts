import { ILoginAction } from "../../login/actions";
import { LOGIN_OK } from "../../login/constants";
import { IRegisterAction } from "../../register/actions";
import { REGISTER_OK } from "../../register/constants";
import { IUserAuthAction } from "../actions";
import { LOGOUT, USER_AUTH, USER_AUTH_ERROR, USER_AUTH_OK } from "../constants";

export type IUserAuthIsAuthorizedStore = boolean;

export const initialState = false;

export default (
    state: IUserAuthIsAuthorizedStore = initialState,
    action: ILoginAction | IUserAuthAction | IRegisterAction
): IUserAuthIsAuthorizedStore => {
    switch (action.type) {
        case LOGOUT:
        case USER_AUTH:
        case USER_AUTH_ERROR:
            return false;
        case LOGIN_OK:
        case REGISTER_OK:
        case USER_AUTH_OK:
            return true;
        default:
            return state;
    }
};
