import React from "react";
import renderer from "react-test-renderer";

import { IMessage } from "../../types";
import { Message } from "./index";

test("Message", () => {
    const emptyMessage: IMessage = {
        text: "",
        type: "info",
    };

    const props = {
        message: emptyMessage,
        messageHide: () => {},
    };

    const emtpyTree = renderer.create(<Message {...props} />).toJSON();
    expect(emtpyTree).toMatchInlineSnapshot(`null`);

    const fullTree = renderer.create(<Message {...props} message={{ ...emptyMessage, text: "123" }} />).toJSON();
    expect(fullTree).toMatchInlineSnapshot(`
        <div
          className="app-message notification is-info"
        >
          <button
            className="delete"
            onClick={[Function]}
          />
          123
        </div>
    `);
});
