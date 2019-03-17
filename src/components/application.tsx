import * as React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { configureStore } from '../store';
import Home from '../pages/home';
import Item from '../pages/items/item';

// prepare store
const history = createBrowserHistory();
const store = configureStore();

export default () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/items/:id(\d+)" component={Item} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>
);
