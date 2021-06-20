import { combineReducers } from "redux";

import submit, { UserEditSubmitStore } from "./slices/submit";

export interface UserEditStore {
    submit: UserEditSubmitStore;
}

export default combineReducers({
    submit,
});
