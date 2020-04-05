import { combineReducers } from "redux";

import error, { IEditErrorStore } from "./error";
import isSubmitted, { IEditIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { IEditIsSubmittingStore } from "./isSubmitting";

export interface IEditSubmitStore {
    error: IEditErrorStore;
    isSubmitted: IEditIsSubmittedStore;
    isSubmitting: IEditIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
