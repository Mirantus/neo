import { combineReducers } from "redux";

import init, { IEditInitStore } from "./init/index";
import submit, { IEditSubmitStore } from "./submit/index";

export interface IEditStore {
    init: IEditInitStore;
    submit: IEditSubmitStore;
}

export default combineReducers({
    init,
    submit,
});
