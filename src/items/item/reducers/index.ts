import { combineReducers } from "redux";

import data, { ItemDataStore } from "./data";
import createError, { ErrorStore } from "../../../store/error";
import createIsLoading, { IsLoadingStore } from "../../../store/isLoading";
import { ITEM_FETCH } from "../constants";

export interface ItemStore {
    data: ItemDataStore;
    error: ErrorStore;
    isFetching: IsLoadingStore;
}

export default combineReducers({
    data,
    error: createError(ITEM_FETCH),
    isFetching: createIsLoading(ITEM_FETCH),
});
