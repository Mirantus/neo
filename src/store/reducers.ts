import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import items, { IItemsStore } from "../items/reducers";

export interface IStore {
    items: IItemsStore;
}

export default combineReducers({
    form,
    items,
});
