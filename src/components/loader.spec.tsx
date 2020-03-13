import React from "react";
import renderer from "react-test-renderer";

import Loader from "./loader";

test("Loader", () => {
    const tree = renderer.create(<Loader />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
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
    `);
});
