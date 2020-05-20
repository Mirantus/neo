import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../store/error";
import createIsLoading, { IsLoadingStore } from "../../store/isLoading";
import { ITEMS_DELETE } from "./constants";

export interface DeleteStore {
    error: ErrorStore;
    isSubmitting: IsLoadingStore;
}

export default combineReducers({
    error: createError(ITEMS_DELETE),
    isSubmitting: createIsLoading(ITEMS_DELETE),
});
