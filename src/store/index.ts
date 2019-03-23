import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer, { IStore } from "./reducers";

export const configureStore = (): Store<IStore> => {
    let middleware = applyMiddleware(thunk);

    if (process.env.NODE_ENV !== "production") {
        middleware = composeWithDevTools(middleware);
    }

    return createStore(reducer as any, middleware) as Store<IStore>;
};
