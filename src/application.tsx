import * as React from 'react';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from 'pages/home';

// prepare store
const history = createBrowserHistory();

export default () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </Router>
);
