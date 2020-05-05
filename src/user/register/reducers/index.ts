import { combineReducers } from "redux";

import error, { RegisterErrorStore } from "./error";
import isSubmitted, { RegisterIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { RegisterIsSubmittingStore } from "./isSubmitting";

export interface RegisterStore {
    error: RegisterErrorStore;
    isSubmitted: RegisterIsSubmittedStore;
    isSubmitting: RegisterIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
