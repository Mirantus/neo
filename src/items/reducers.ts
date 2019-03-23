import { combineReducers } from "redux";

import item, { IItemStore } from "./item/reducers";
import list, { IListStore } from "./list/reducers";

export interface IItemsStore {
    item: IItemStore;
    list: IListStore;
}

export default combineReducers({ item, list });
