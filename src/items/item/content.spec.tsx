import React from "react";
import renderer from "react-test-renderer";

import Content from "./content";

test("ItemContent", () => {
    const props: any = {
        data: {
            text: "text",
            date: "2019-01-01",
        },
    };

    const tree = renderer.create(<Content {...props} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="container"
        >
          <h1
            className="title"
          >
            Запись
          </h1>
          <p>
            text
          </p>
          <p>
            <time
              dateTime="2019-01-01"
            >
              1.01.2019
            </time>
          </p>
        </div>
    `);
});
