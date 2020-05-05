import { combineReducers } from "redux";

import data, { ListDataStore } from "./data";
import error, { ListErrorStore } from "./error";
import isFetching, { ListIsFetchingStore } from "./isFetching";

export interface ListStore {
    data: ListDataStore;
    error: ListErrorStore;
    isFetching: ListIsFetchingStore;
}

export default combineReducers({
    data,
    error,
    isFetching,
});
