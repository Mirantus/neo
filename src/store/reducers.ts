import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import loading, { ILoadingStore } from "../components/loading/reducers";
import message, { IMessageStore } from "../components/message/reducers";
import items, { IItemsStore } from "../items/reducers";
import user, { IUserStore } from "../user/reducers";

export interface IStore {
    items: IItemsStore;
    loading: ILoadingStore;
    message: IMessageStore;
    user: IUserStore;
}

export default combineReducers({
    form,
    items,
    loading,
    message,
    user,
});
