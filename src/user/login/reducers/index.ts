import { combineReducers } from "redux";

import error, { ILoginErrorStore } from "./error";
import isSubmitted, { ILoginIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { ILoginIsSubmittingStore } from "./isSubmitting";

export interface ILoginStore {
    error: ILoginErrorStore;
    isSubmitted: ILoginIsSubmittedStore;
    isSubmitting: ILoginIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
