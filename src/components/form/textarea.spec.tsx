import React from "react";
import renderer from "react-test-renderer";

import { renderField as RenderField } from "./textarea";
import { props } from "./input.spec";

test("Textarea", () => {
    const tree = renderer.create(<RenderField {...props} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="control"
        >
          <textarea
            className="textarea"
            name="name"
            onBlur={[Function]}
            onChange={[Function]}
            onDragStart={[Function]}
            onDrop={[Function]}
            onFocus={[Function]}
            value="value"
          />
        </div>
    `);
});

test("RenderField с ошибкой", () => {
    const propsWithError = { ...props, meta: { ...props.meta, error: "error" } };
    const tree = renderer.create(<RenderField {...propsWithError} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="control"
        >
          <textarea
            className="textarea"
            name="name"
            onBlur={[Function]}
            onChange={[Function]}
            onDragStart={[Function]}
            onDrop={[Function]}
            onFocus={[Function]}
            value="value"
          />
          <p
            className="help is-danger"
          >
            error
          </p>
        </div>
    `);
});
