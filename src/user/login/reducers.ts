import { combineReducers } from "redux";

import submit, { LoginSubmitStore } from "./slices/submit";

export interface LoginStore {
    submit: LoginSubmitStore;
}

export default combineReducers({
    submit,
});
