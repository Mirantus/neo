import { combineReducers } from "redux";

import add, { AddStore } from "./add/slice";
import deleteItem, { DeleteStore } from "./delete/slice";
import edit, { EditStore } from "./edit/reducers";
import item, { ItemStore } from "./item/slice";
import list, { ListStore } from "./list/slice";

export interface ItemsStore {
    add: AddStore;
    delete: DeleteStore;
    edit: EditStore;
    item: ItemStore;
    list: ListStore;
}

export default combineReducers({ add, delete: deleteItem, edit, item, list });
