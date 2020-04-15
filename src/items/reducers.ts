import { combineReducers } from "redux";

import add, { IAddStore } from "./add/reducers";
import deleteItem, { IDeleteStore } from "./delete/reducers";
import edit, { IEditStore } from "./edit/reducers";
import item, { IItemStore } from "./item/reducers";
import list, { IListStore } from "./list/reducers";

export interface IItemsStore {
    add: IAddStore;
    delete: IDeleteStore;
    edit: IEditStore;
    item: IItemStore;
    list: IListStore;
}

export default combineReducers({ add, delete: deleteItem, edit, item, list });
