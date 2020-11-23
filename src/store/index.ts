import { configureStore } from "@reduxjs/toolkit";
import { reducer as form } from "redux-form";

import loading, { LoadingStore } from "../components/loading/slice";
import message, { MessageStore } from "../components/message/slice";
import items, { ItemsStore } from "../items/reducers";
import user, { UserStore } from "../user/reducers";

export interface Store {
    items: ItemsStore;
    loading: LoadingStore;
    message: MessageStore;
    user: UserStore;
}

export default configureStore({
    reducer: {
        form,
        items,
        loading,
        message,
        user,
    },
});
