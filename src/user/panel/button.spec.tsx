import React from "react";
import renderer from "react-test-renderer";

import Button from "./button";

test("Button", () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="buttons"
        >
          <a
            className="button is-light"
            href="/login"
          >
            Войти
          </a>
        </div>
    `);
});
