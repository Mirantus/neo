import React from "react";
import renderer from "react-test-renderer";

import Date from "./date";

test("ItemDate", () => {
    const props: any = {
        date: "2019-12-31",
    };

    const tree = renderer.create(<Date {...props} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <time
          dateTime="2019-12-31"
        >
          31.12.2019
        </time>
    `);
});
