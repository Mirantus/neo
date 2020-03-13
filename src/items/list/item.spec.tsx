import React from "react";
import renderer from "react-test-renderer";

import { Item } from "./item";

test("ListItem", () => {
    const props: any = {
        data: {
            id: "1",
            text: "text",
            date: "2019-01-01",
        },
        history: {
            push: jest.fn(),
        },
    };

    const tree = renderer.create(<Item {...props} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="box pointer"
          onClick={[Function]}
        >
          text
          <br />
          <time
            dateTime="2019-01-01"
          >
            1.01.2019
          </time>
        </div>
    `);

    (tree as any).props.onClick();

    expect(props.history.push).toHaveBeenCalledWith("/items/" + props.data.id);
});
