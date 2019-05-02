import { combineReducers } from "redux";

import error, { IAddErrorStore } from "./error";
import isSubmitted, { IAddIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { IAddIsSubmittingStore } from "./isSubmitting";

export interface IAddStore {
    error: IAddErrorStore;
    isSubmitted: IAddIsSubmittedStore;
    isSubmitting: IAddIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
