import { combineReducers } from "redux";

import isAuthorized, { AuthIsAuthorizedStore } from "./slices/isAuthorized";
import submit, { AuthSubmitStore } from "./slices/submit/index";

export interface AuthStore {
    isAuthorized: AuthIsAuthorizedStore;
    submit: AuthSubmitStore;
}

export default combineReducers({
    isAuthorized,
    submit,
});
