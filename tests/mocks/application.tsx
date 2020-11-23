import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";

import Application from "../../src/components/application";
import store from "../../src/store";

const history = createMemoryHistory();

const TestApplicationContainer = () => (
  <Provider store={store}>
    <Router history={history}>
      <Application />
    </Router>
  </Provider>
);

export default TestApplicationContainer;
