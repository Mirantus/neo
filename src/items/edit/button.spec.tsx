import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import { ItemEditButton } from "./button";

test("ItemEditButton", () => {
    const props: any = {
        item: {
            id: "1",
            text: "text",
            date: "2019-01-01",
            user_id: "1",
        },
    };

    // No rights to edit
    const emptyTree = renderer
        .create(
            <MemoryRouter>
                <ItemEditButton {...props} userId="2" />
            </MemoryRouter>
        )
        .toJSON();
    expect(emptyTree).toMatchInlineSnapshot(`null`);

    // Has rights to edit
    const fullTree = renderer
        .create(
            <MemoryRouter>
                <ItemEditButton {...props} userId="1" />
            </MemoryRouter>
        )
        .toJSON();
    expect(fullTree).toMatchInlineSnapshot(`
        <a
          className="is-link has-text-grey-light"
          href="/edit/1"
          onClick={[Function]}
        >
          <span
            className="icon is-small"
          >
            <i
              className="fas fa-edit"
            />
          </span>
        </a>
    `);
});
