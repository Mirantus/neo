import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../store/error";
import createIsLoading, { IsLoadingStore } from "../../store/isLoading";
import createIsLoaded, { IsLoadedStore } from "../../store/isLoaded";
import { USER_EDIT } from "./constants";

export interface UserEditStore {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    isSubmitting: IsLoadingStore;
}

export default combineReducers({
    error: createError(USER_EDIT),
    isSubmitted: createIsLoaded(USER_EDIT),
    isSubmitting: createIsLoading(USER_EDIT),
});