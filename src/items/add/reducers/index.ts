import { combineReducers } from "redux";

import error, { AddErrorStore } from "./error";
import isSubmitted, { AddIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { AddIsSubmittingStore } from "./isSubmitting";

export interface AddStore {
    error: AddErrorStore;
    isSubmitted: AddIsSubmittedStore;
    isSubmitting: AddIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
