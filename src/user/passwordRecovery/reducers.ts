import { combineReducers } from "redux";

import submit, { PasswordRecoverySubmitStore } from "./slices/submit";

export interface PasswordRecoveryStore {
    submit: PasswordRecoverySubmitStore;
}

export default combineReducers({
    submit,
});
