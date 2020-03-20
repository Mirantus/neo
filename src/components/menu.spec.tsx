import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Menu from "./menu";

test("Menu", () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <Menu />
            </MemoryRouter>
        )
        .toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <a
          className="navbar-item"
          href="/"
          onClick={[Function]}
        >
          Записи
        </a>
    `);
});
