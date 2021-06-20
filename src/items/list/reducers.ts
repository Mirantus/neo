import { combineReducers } from "redux";

import init, { ListInitStore } from "./slices/init";

export interface ListStore {
    init: ListInitStore;
}

export default combineReducers({
    init,
});
