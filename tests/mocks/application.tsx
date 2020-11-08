import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

import Application from "../../src/components/application";
import { configureStore } from "../../src/store";

const history = createMemoryHistory();
const store = configureStore();

const TestApplicationContainer = () => (
  <Provider store={store}>
    <Router history={history}>
      <Application />
    </Router>
  </Provider>
);

export default TestApplicationContainer;
