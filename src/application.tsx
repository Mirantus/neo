import * as React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { createBrowserHistory } from 'history';

import reducer, { StoreInterface } from './reducers';
import Home from './pages/home';

// prepare store
const history = createBrowserHistory();
const store = createStore(reducer as any) as Store<StoreInterface>;

export default () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>
);
