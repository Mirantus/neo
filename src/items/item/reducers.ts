import { combineReducers } from "redux";

import init, { ItemInitStore } from "./slices/init";

export interface ItemStore {
    init: ItemInitStore;
}

export default combineReducers({
    init,
});
