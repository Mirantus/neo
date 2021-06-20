import { combineReducers } from "redux";

import submit, { DeleteSubmitStore } from "./slices/submit";

export interface DeleteStore {
    submit: DeleteSubmitStore;
}

export default combineReducers({
    submit,
});
