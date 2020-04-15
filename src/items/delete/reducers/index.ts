import { combineReducers } from "redux";

import error, { IDeleteErrorStore } from "./error";
import isSubmitting, { IDeleteIsSubmittingStore } from "./isSubmitting";

export interface IDeleteStore {
    error: IDeleteErrorStore;
    isSubmitting: IDeleteIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitting,
});
