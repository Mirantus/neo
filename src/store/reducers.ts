import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import loading, { LoadingStore } from "../components/loading/reducers";
import message, { MessageStore } from "../components/message/reducers";
import items, { ItemsStore } from "../items/reducers";
import user, { UserStore } from "../user/reducers";

export interface Store {
    items: ItemsStore;
    loading: LoadingStore;
    message: MessageStore;
    user: UserStore;
}

export default combineReducers({
    form,
    items,
    loading,
    message,
    user,
});
