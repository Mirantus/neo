import { combineReducers } from "redux";

import init, { EditInitStore } from "./slices/init";
import submit, { EditSubmitStore } from "./slices/submit";

export interface EditStore {
    init: EditInitStore;
    submit: EditSubmitStore;
}

export default combineReducers({
    init,
    submit,
});
