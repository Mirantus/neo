import { combineReducers } from "redux";

import error, { IUserAuthErrorStore } from "./error";
import isAuthorized, { IUserAuthIsAuthorizedStore } from "./isAuthorized";
import isFetching, { IUserAuthIsFetchingStore } from "./isFetching";

export interface IUserAuthStore {
    error: IUserAuthErrorStore;
    isAuthorized: IUserAuthIsAuthorizedStore;
    isFetching: IUserAuthIsFetchingStore;
}

export default combineReducers({
    error,
    isAuthorized,
    isFetching,
});
