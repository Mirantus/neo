import { combineReducers } from "redux";

import error, { UserEditErrorStore } from "./error";
import isSubmitted, { UserEditIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { UserEditIsSubmittingStore } from "./isSubmitting";

export interface UserEditStore {
    error: UserEditErrorStore;
    isSubmitted: UserEditIsSubmittedStore;
    isSubmitting: UserEditIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
