import { combineReducers } from "redux";

import data, { IListDataStore } from "./data";
import error, { IListErrorStore } from "./error";
import isFetching, { IListIsFetchingStore } from "./isFetching";

export interface IListStore {
    data: IListDataStore;
    error: IListErrorStore;
    isFetching: IListIsFetchingStore;
}

export default combineReducers({
    data,
    error,
    isFetching,
});
