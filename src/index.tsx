import { createBrowserHistory } from "history";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import Application from "./components/application";
import { configureStore } from "./store";

const history = createBrowserHistory();
const store = configureStore();

const ApplicationContainer = () => (
    <Provider store={store}>
        <Router history={history}>
            <Application />
        </Router>
    </Provider>
);

render(<ApplicationContainer />, document.getElementById("app"));
