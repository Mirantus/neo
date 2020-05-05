import { combineReducers } from "redux";

import error, { PasswordRecoveryErrorStore } from "./error";
import isSubmitted, { PasswordRecoveryIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { PasswordRecoveryIsSubmittingStore } from "./isSubmitting";

export interface PasswordRecoveryStore {
    error: PasswordRecoveryErrorStore;
    isSubmitted: PasswordRecoveryIsSubmittedStore;
    isSubmitting: PasswordRecoveryIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
