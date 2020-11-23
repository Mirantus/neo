import { combineReducers } from "redux";

import error, { AuthErrorStore } from "./slices/error";
import isAuthorized, { AuthIsAuthorizedStore } from "./slices/isAuthorized";
import isFetching, { AuthIsFetchingStore } from "./slices/isFetching";

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
