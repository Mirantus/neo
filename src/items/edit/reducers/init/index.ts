import { combineReducers } from "redux";

import data, { EditInitDataStore } from "./data";
import error, { EditInitErrorStore } from "./error";
import isFetching, { EditInitIsFetchingStore } from "./isFetching";

export interface EditInitStore {
    data: EditInitDataStore;
    error: EditInitErrorStore;
    isFetching: EditInitIsFetchingStore;
}

export default combineReducers({
    data,
    error,
    isFetching,
});
