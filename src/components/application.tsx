import { createBrowserHistory } from "history";
import * as React from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router";

import Home from "../pages/home";
import Add from "../pages/items/add";
import Item from "../pages/items/item";
import { configureStore } from "../store";
import "../styles.less";

// prepare store
const history = createBrowserHistory();
const store = configureStore();

const Application = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/add" component={Add} />
                <Route path="/items/:id(\d+)" component={Item} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>
);

export default Application;
