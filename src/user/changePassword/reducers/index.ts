import { combineReducers } from "redux";

import error, { ChangePasswordErrorStore } from "./error";
import isSubmitted, { ChangePasswordIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { ChangePasswordIsSubmittingStore } from "./isSubmitting";

export interface ChangePasswordStore {
    error: ChangePasswordErrorStore;
    isSubmitted: ChangePasswordIsSubmittedStore;
    isSubmitting: ChangePasswordIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
