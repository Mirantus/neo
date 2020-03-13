import React from "react";
import renderer from "react-test-renderer";

import Field from "./field";

test("Field", () => {
    const props = {
        label: "label",
        children: "text",
    };

    const tree = renderer.create(<Field {...props} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="field"
        >
          <label
            className="label"
          >
            label
          </label>
          text
        </div>
    `);
});
