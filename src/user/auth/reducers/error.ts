import { IAuthAction } from "../actions";
import { AUTH, AUTH_ERROR, LOGOUT } from "../constants";

export type IAuthErrorStore = string | null;

export const initialState = null;

export default (state: IAuthErrorStore = initialState, action: IAuthAction): IAuthErrorStore => {
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
