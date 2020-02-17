import { IUserAuthAction } from "../actions";
import { USER_AUTH, USER_AUTH_ERROR } from "../constants";

export type IUserAuthErrorStore = string | null;

export const initialState = null;

export default (state: IUserAuthErrorStore = initialState, action: IUserAuthAction): IUserAuthErrorStore => {
    switch (action.type) {
        case USER_AUTH:
            return initialState;

        case USER_AUTH_ERROR:
            return action.payload;

        default:
            return state;
    }
};
