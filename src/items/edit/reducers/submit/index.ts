import { combineReducers } from "redux";

import error, { EditErrorStore } from "./error";
import isSubmitted, { EditIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { EditIsSubmittingStore } from "./isSubmitting";

export interface EditSubmitStore {
    error: EditErrorStore;
    isSubmitted: EditIsSubmittedStore;
    isSubmitting: EditIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
