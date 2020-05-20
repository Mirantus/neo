import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../store/error";
import createIsLoading, { IsLoadingStore } from "../../store/isLoading";
import createIsLoaded, { IsLoadedStore } from "../../store/isLoaded";
import { ITEMS_ADD } from "./constants";

export interface AddStore {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    isSubmitting: IsLoadingStore;
}

export default combineReducers({
    error: createError(ITEMS_ADD),
    isSubmitted: createIsLoaded(ITEMS_ADD),
    isSubmitting: createIsLoading(ITEMS_ADD),
});
