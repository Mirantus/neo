import React from "react";
import { shallow } from "enzyme";

import { ItemsAdd } from "./index";
import Form from "./form";

test("ItemsAdd", () => {
    const props: any = {
        error: null,
        history: [],
        isSubmitted: false,
        add: jest.fn(),
        initAdd: jest.fn(),
    };

    const wrapper = shallow(<ItemsAdd {...props} />);

    expect(wrapper.type()).toEqual(Form);
    // TODO: expect(props.initAdd).toHaveBeenCalled();
    // TODO: !error && isSubmitted вызывает history.push

    wrapper.prop("onSubmit")();
    expect(props.add).toHaveBeenCalled();
});

test("ItemsAdd error", () => {
    const props: any = {
        error: "error",
        history: [],
        isSubmitted: false,
        add: jest.fn(),
        initAdd: jest.fn(),
    };

    const wrapper = shallow(<ItemsAdd {...props} />);

    expect(wrapper.prop("formError")).toBe(props.error);
});
