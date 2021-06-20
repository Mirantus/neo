import { combineReducers } from "redux";

import submit, { RegisterSubmitStore } from "./slices/submit";

export interface RegisterStore {
    submit: RegisterSubmitStore;
}

export default combineReducers({
    submit,
});
