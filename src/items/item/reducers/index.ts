import { combineReducers } from "redux";

import data, { ItemDataStore } from "./data";
import error, { ItemErrorStore } from "./error";
import isFetching, { ItemIsFetchingStore } from "./isFetching";

export interface ItemStore {
    data: ItemDataStore;
    error: ItemErrorStore;
    isFetching: ItemIsFetchingStore;
}

export default combineReducers({
    data,
    error,
    isFetching,
});
