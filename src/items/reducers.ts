import { combineReducers } from "redux";

import add, { AddStore } from "./add/reducers";
import deleteItem, { DeleteStore } from "./delete/reducers";
import edit, { EditStore } from "./edit/reducers";
import item, { ItemStore } from "./item/reducers";
import list, { ListStore } from "./list/reducers";

export interface ItemsStore {
    add: AddStore;
    delete: DeleteStore;
    edit: EditStore;
    item: ItemStore;
    list: ListStore;
}

export default combineReducers({ add, delete: deleteItem, edit, item, list });
