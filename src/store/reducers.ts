import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import items, { IItemsStore } from "../items/reducers";
import user, { IUserStore } from "../user/reducers";

export interface IStore {
    items: IItemsStore;
    user: IUserStore;
}

export default combineReducers({
    form,
    items,
    user,
});
