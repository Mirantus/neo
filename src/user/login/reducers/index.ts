import { combineReducers } from "redux";

import error, { LoginErrorStore } from "./error";
import isSubmitted, { LoginIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { LoginIsSubmittingStore } from "./isSubmitting";

export interface LoginStore {
    error: LoginErrorStore;
    isSubmitted: LoginIsSubmittedStore;
    isSubmitting: LoginIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
