import { combineReducers } from "redux";

import init, { EditInitStore } from "./init/index";
import submit, { EditSubmitStore } from "./submit";

export interface EditStore {
    init: EditInitStore;
    submit: EditSubmitStore;
}

export default combineReducers({
    init,
    submit,
});
