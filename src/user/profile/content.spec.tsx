import React from "react";
import renderer from "react-test-renderer";

import Content from "./content";

test("ProfileContent", () => {
    const tree = renderer.create(<Content />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="container"
        >
          <h1
            className="title"
          >
            Профиль
          </h1>
        </div>
    `);
});
