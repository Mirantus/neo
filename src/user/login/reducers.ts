import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../store/error";
import createIsLoaded, { IsLoadedStore } from "../../store/isLoaded";
import createIsLoading, { IsLoadingStore } from "../../store/isLoading";

import { LOGIN } from "./constants";

export interface LoginStore {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    isSubmitting: IsLoadingStore;
}

export default combineReducers({
    error: createError(LOGIN),
    isSubmitted: createIsLoaded(LOGIN),
    isSubmitting: createIsLoading(LOGIN),
});
