import { combineReducers } from "redux";

import submit, { ChangePasswordSubmitStore } from "./slices/submit";

export interface ChangePasswordStore {
    submit: ChangePasswordSubmitStore;
}

export default combineReducers({
    submit,
});
