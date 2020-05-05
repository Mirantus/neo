import { combineReducers } from "redux";

import error, { AuthErrorStore } from "./error";
import isAuthorized, { AuthIsAuthorizedStore } from "./isAuthorized";
import isFetching, { AuthIsFetchingStore } from "./isFetching";

export interface AuthStore {
    error: AuthErrorStore;
    isAuthorized: AuthIsAuthorizedStore;
    isFetching: AuthIsFetchingStore;
}

export default combineReducers({
    error,
    isAuthorized,
    isFetching,
});
