import { IUserAuthAction } from "../actions";
import { USER_AUTH, USER_AUTH_ERROR, USER_AUTH_OK } from "../constants";

export type IUserAuthIsFetchingStore = boolean;

export const initialState = false;

export default (state: IUserAuthIsFetchingStore = initialState, action: IUserAuthAction): IUserAuthIsFetchingStore => {
    switch (action.type) {
        case USER_AUTH:
            return true;
        case USER_AUTH_ERROR:
        case USER_AUTH_OK:
            return initialState;
        default:
            return state;
    }
};
