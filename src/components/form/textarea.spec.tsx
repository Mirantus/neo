import React from "react";
import { shallow } from "enzyme";

import Textarea, { renderField as RenderField } from "./textarea";

test("Textarea", () => {
    const props = {
        name: "name",
    };

    const wrapper = shallow(<Textarea {...props} />);

    expect(wrapper.prop("name")).toEqual(props.name);
});

const componentProps = {
    input: {
        name: "",
        value: "",
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

test("RenderField без ошибки", () => {
    const wrapper = shallow(<RenderField {...componentProps} />);

    expect(wrapper.find("textarea")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(0);
});

test("RenderField с ошибкой", () => {
    const error = "error";
    const props = { ...componentProps, meta: { ...componentProps.meta, error } };
    const wrapper = shallow(<RenderField {...props} />);

    expect(wrapper.html()).toContain(error);
});
