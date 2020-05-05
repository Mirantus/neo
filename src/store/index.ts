import { applyMiddleware, createStore, Store as ReduxStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer, { Store } from "./reducers";

export const configureStore = (): ReduxStore<Store> => {
    let middleware = applyMiddleware(thunk);

    if (process.env.NODE_ENV !== "production") {
        middleware = composeWithDevTools(middleware);
    }

    return createStore(reducer as any, middleware) as ReduxStore<Store>;
};
