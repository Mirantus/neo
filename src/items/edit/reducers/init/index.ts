import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../../../store/error";
import createIsLoading, { IsLoadingStore } from "../../../../store/isLoading";
import { ITEMS_EDIT } from "../../constants";
import data, { EditInitDataStore } from "./data";

export interface EditInitStore {
    data: EditInitDataStore;
    error: ErrorStore;
    isFetching: IsLoadingStore;
}

export default combineReducers({
    data,
    error: createError(ITEMS_EDIT),
    isFetching: createIsLoading(ITEMS_EDIT),
});
