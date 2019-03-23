import { combineReducers } from "redux";

import data, { IItemDataStore } from "./data";
import error, { IItemErrorStore } from "./error";
import isFetching, { IItemIsFetchingStore } from "./isFetching";

export interface IItemStore {
    data: IItemDataStore;
    error: IItemErrorStore;
    isFetching: IItemIsFetchingStore;
}

export default combineReducers({
    data,
    error,
    isFetching,
});
