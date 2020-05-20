import { combineReducers } from "redux";

import data, { ListDataStore } from "./data";
import createError, { ErrorStore } from "../../../store/error";
import createIsLoading, { IsLoadingStore } from "../../../store/isLoading";
import { ITEMS_FETCH } from "../constants";

export interface ListStore {
    data: ListDataStore;
    error: ErrorStore;
    isFetching: IsLoadingStore;
}

export default combineReducers({
    data,
    error: createError(ITEMS_FETCH),
    isFetching: createIsLoading(ITEMS_FETCH),
});
