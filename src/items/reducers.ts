import { combineReducers } from "redux";

import add, { IAddStore } from "./add/reducers";
import edit, { IEditStore } from "./edit/reducers";
import item, { IItemStore } from "./item/reducers";
import list, { IListStore } from "./list/reducers";

export interface IItemsStore {
    add: IAddStore;
    edit: IEditStore;
    item: IItemStore;
    list: IListStore;
}

export default combineReducers({ add, edit, item, list });
