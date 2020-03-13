import React from "react";
import renderer from "react-test-renderer";

import Error from "./error";

test("Error", () => {
    const props = {
        message: "message",
    };

    const tree = renderer.create(<Error {...props} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <p
          className="help is-danger"
        >
          Ошибка: 
          message
        </p>
    `);
});
