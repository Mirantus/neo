import { combineReducers } from "redux";

import add, { IAddStore } from "./add/reducers";
import item, { IItemStore } from "./item/reducers";
import list, { IListStore } from "./list/reducers";

export interface IItemsStore {
    add: IAddStore;
    item: IItemStore;
    list: IListStore;
}

export default combineReducers({ add, item, list });
