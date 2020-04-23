import { combineReducers } from "redux";

import error, { IUserEditErrorStore } from "./error";
import isSubmitted, { IUserEditIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { IUserEditIsSubmittingStore } from "./isSubmitting";

export interface IUserEditStore {
    error: IUserEditErrorStore;
    isSubmitted: IUserEditIsSubmittedStore;
    isSubmitting: IUserEditIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
