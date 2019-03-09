import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer, { Type as StoreType } from './reducers';

export const configureStore = (): Store<StoreType> => {
    let middleware = applyMiddleware(thunk);

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }

    return createStore(reducer as any, middleware) as Store<StoreType>;
};
