import { combineReducers } from "redux";

import error, { DeleteErrorStore } from "./error";
import isSubmitting, { DeleteIsSubmittingStore } from "./isSubmitting";

export interface DeleteStore {
    error: DeleteErrorStore;
    isSubmitting: DeleteIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitting,
});
