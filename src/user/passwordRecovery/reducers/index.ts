import { combineReducers } from "redux";

import error, { IPasswordRecoveryErrorStore } from "./error";
import isSubmitted, { IPasswordRecoveryIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { IPasswordRecoveryIsSubmittingStore } from "./isSubmitting";

export interface IPasswordRecoveryStore {
    error: IPasswordRecoveryErrorStore;
    isSubmitted: IPasswordRecoveryIsSubmittedStore;
    isSubmitting: IPasswordRecoveryIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
