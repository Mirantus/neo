import { combineReducers } from "redux";

import submit, { AddSubmitStore } from "./slices/submit";

export interface AddStore {
    submit: AddSubmitStore;
}

export default combineReducers({
    submit,
});
