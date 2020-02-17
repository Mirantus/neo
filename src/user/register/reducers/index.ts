import { combineReducers } from "redux";

import error, { IRegisterErrorStore } from "./error";
import isSubmitted, { IRegisterIsSubmittedStore } from "./isSubmitted";
import isSubmitting, { IRegisterIsSubmittingStore } from "./isSubmitting";

export interface IRegisterStore {
    error: IRegisterErrorStore;
    isSubmitted: IRegisterIsSubmittedStore;
    isSubmitting: IRegisterIsSubmittingStore;
}

export default combineReducers({
    error,
    isSubmitted,
    isSubmitting,
});
