import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../../store/error";
import createIsLoaded, { IsLoadedStore } from "../../../store/isLoaded";
import createIsLoading, { IsLoadingStore } from "../../../store/isLoading";
import { ITEMS_EDIT } from "../constants";

export interface EditSubmitStore {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    isSubmitting: IsLoadingStore;
}

export default combineReducers({
    error: createError(ITEMS_EDIT),
    isSubmitted: createIsLoaded(ITEMS_EDIT),
    isSubmitting: createIsLoading(ITEMS_EDIT),
});
