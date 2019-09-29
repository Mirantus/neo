import React from "react";
import { shallow } from "enzyme";

import { ItemsAddForm, validate } from "./form";

test("ItemsAddForm", () => {
    const props: any = {
        formError: null,
        handleSubmit: jest.fn(),
    };

    const wrapper = shallow(<ItemsAddForm {...props} />);

    expect(wrapper.type()).toEqual("form");
    expect(wrapper.find('[name="text"]')).toHaveLength(1);
    expect(wrapper.find("Error")).toHaveLength(0);

    wrapper.prop("onSubmit")();

    expect(props.handleSubmit).toHaveBeenCalled();
});

test("ItemsAddForm error", () => {
    const props: any = {
        formError: {
            message: "error",
        },
        handleSubmit: () => {},
    };

    const wrapper = shallow(<ItemsAddForm {...props} />);
    const errorWrapper = wrapper.find("Error");

    expect(errorWrapper).toHaveLength(1);
    expect(errorWrapper.prop("message")).toBe(props.formError.message);
});

test("ItemsAddForm validate", () => {
    expect(validate({ text: "text" })).toEqual({});
});

test("ItemsAddForm validate error", () => {
    expect(validate({ text: "" })).toHaveProperty("text");
});
