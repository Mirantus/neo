import { combineReducers } from "redux";

import error, { IAuthErrorStore } from "./error";
import isAuthorized, { IAuthIsAuthorizedStore } from "./isAuthorized";
import isFetching, { IAuthIsFetchingStore } from "./isFetching";

export interface IAuthStore {
    error: IAuthErrorStore;
    isAuthorized: IAuthIsAuthorizedStore;
    isFetching: IAuthIsFetchingStore;
}

export default combineReducers({
    error,
    isAuthorized,
    isFetching,
});
