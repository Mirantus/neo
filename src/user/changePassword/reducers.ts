import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../store/error";
import createIsLoaded, { IsLoadedStore } from "../../store/isLoaded";
import createIsLoading, { IsLoadingStore } from "../../store/isLoading";

import { CHANGE_PASSWORD } from "./constants";

export interface ChangePasswordStore {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    isSubmitting: IsLoadingStore;
}

export default combineReducers({
    error: createError(CHANGE_PASSWORD),
    isSubmitted: createIsLoaded(CHANGE_PASSWORD),
    isSubmitting: createIsLoading(CHANGE_PASSWORD),
});
