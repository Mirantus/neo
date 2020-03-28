import { IAuthAction } from "../actions";
import { AUTH, AUTH_ERROR, AUTH_OK, LOGOUT } from "../constants";

export type IAuthIsFetchingStore = boolean;

export const initialState = true;

export default (state: IAuthIsFetchingStore = initialState, action: IAuthAction): IAuthIsFetchingStore => {
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
