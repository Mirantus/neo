import { IUserAuthAction } from "../actions";
import { USER_AUTH, USER_AUTH_ERROR, USER_AUTH_OK } from "../constants";

export type IUserAuthIsAuthorizedStore = boolean;

export const initialState = false;

export default (
    state: IUserAuthIsAuthorizedStore = initialState,
    action: IUserAuthAction
): IUserAuthIsAuthorizedStore => {
    switch (action.type) {
        case USER_AUTH:
        case USER_AUTH_ERROR:
            return false;
        case USER_AUTH_OK:
            return true;
        default:
            return state;
    }
};
