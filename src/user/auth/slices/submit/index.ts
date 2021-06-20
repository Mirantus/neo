import { combineReducers } from "redux";

import error, { AuthSubmitErrorStore } from "./error";
import pending, { AuthSubmitPendingStore } from "./pending";

export interface AuthSubmitStore {
    error: AuthSubmitErrorStore;
    pending: AuthSubmitPendingStore;
}

export default combineReducers({
    error,
    pending,
});
