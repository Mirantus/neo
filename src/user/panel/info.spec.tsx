import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Info from "./info";

test("Info", () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <Info email="e@mail.com" />
            </MemoryRouter>
        )
        .toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <a
          className="has-text-white"
          href="/profile"
          onClick={[Function]}
        >
          e@mail.com
        </a>
    `);
});
