import React from "react";
import renderer from "react-test-renderer";

import { renderField as RenderField } from "./input";

export const props = {
    input: {
        name: "name",
        value: "value",
        onBlur: () => null,
        onChange: () => null,
        onDragStart: () => null,
        onDrop: () => null,
        onFocus: () => null,
    },
    meta: {
        autofilled: true,
        asyncValidating: true,
        dirty: true,
        dispatch: (): any => null,
        form: "",
        initial: "",
        invalid: true,
        pristine: true,
        submitting: true,
        submitFailed: true,
        touched: true,
        valid: true,
        visited: true,
    },
};

test("Input", () => {
    const tree = renderer.create(<RenderField {...props} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="control"
        >
          <input
            className="input"
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
          <input
            className="input"
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
