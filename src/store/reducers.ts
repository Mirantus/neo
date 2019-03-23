import { combineReducers } from "redux";

import items, { IItemsStore } from "../items/reducers";

export interface IStore {
    items: IItemsStore;
}

export default combineReducers({
    items,
});
