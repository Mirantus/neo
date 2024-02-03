import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router";

import Application from "../../src/components/application";

const history = createMemoryHistory();

const TestApplicationContainer = () => (
  <Router history={history}>
    <Application />
  </Router>
);

export default TestApplicationContainer;
