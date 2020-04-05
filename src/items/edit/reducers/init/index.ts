import { combineReducers } from "redux";

import data, { IEditInitDataStore } from "./data";
import error, { IEditInitErrorStore } from "./error";
import isFetching, { IEditInitIsFetchingStore } from "./isFetching";

export interface IEditInitStore {
    data: IEditInitDataStore;
    error: IEditInitErrorStore;
    isFetching: IEditInitIsFetchingStore;
}

export default combineReducers({
    data,
    error,
    isFetching,
});
