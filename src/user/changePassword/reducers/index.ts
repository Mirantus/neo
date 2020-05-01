import { combineReducers } from "redux";

import error, { IChangePasswordErrorStore } from "./error";
import isSubmitted, { IChangePasswordIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { IChangePasswordIsSubmittingStore } from "./isSubmitting";

export interface IChangePasswordStore {
    error: IChangePasswordErrorStore;
    isSubmitted: IChangePasswordIsSubmittedStore;
    isSubmitting: IChangePasswordIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
