import React from "react";
import renderer from "react-test-renderer";

import { Loading } from "./index";

test("Loading", () => {
    const props = {
        loading: false,
    };

    const emtpyTree = renderer.create(<Loading {...props} />).toJSON();
    expect(emtpyTree).toMatchInlineSnapshot(`null`);

    const fullTree = renderer.create(<Loading loading={true} />).toJSON();
    expect(fullTree).toMatchInlineSnapshot(`
        <div
          className="app-message notification is-light"
        >
          <div>
            <span
              className="icon has-text-info"
            >
              <i
                className="fas fa-spinner fa-pulse"
              />
            </span>
            Подождите...
          </div>
        </div>
    `);
});
