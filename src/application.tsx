import * as React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import reducer, { StoreInterface } from './reducers';
import Home from './pages/home';

// prepare store
const history = createBrowserHistory();
const store = createStore(reducer as any, applyMiddleware(thunk)) as Store<StoreInterface>;

export default () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>
);
