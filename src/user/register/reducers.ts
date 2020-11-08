import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../store/error";
import createIsLoaded, { IsLoadedStore } from "../../store/isLoaded";
import createIsLoading, { IsLoadingStore } from "../../store/isLoading";

import { REGISTER } from "./constants";

export interface RegisterStore {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    isSubmitting: IsLoadingStore;
}

export default combineReducers({
    error: createError(REGISTER),
    isSubmitted: createIsLoaded(REGISTER),
    isSubmitting: createIsLoading(REGISTER),
});
