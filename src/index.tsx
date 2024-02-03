import { createBrowserHistory } from "history";
import React from "react";
import { render } from "react-dom";
import { Router } from "react-router";

import Application from "./components/application";

const history = createBrowserHistory();

const ApplicationContainer = () => (
    <Router history={history}>
        <Application />
    </Router>
);

render(<ApplicationContainer />, document.getElementById("app"));
