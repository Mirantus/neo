import React from "react";
import { shallow } from "enzyme";

import { ItemsAdd } from "./index";
import Form from "./form";

test("ItemsAdd", () => {
    const props: any = {
        actions: {
            add: jest.fn(),
            initAdd: jest.fn(),
        },
        error: null,
        history: [],
        isSubmitted: false,
    };

    const wrapper = shallow(<ItemsAdd {...props} />);

    expect(wrapper.type()).toEqual(Form);
    // TODO: expect(props.actions.initAdd).toHaveBeenCalled();
    // TODO: !error && isSubmitted вызывает history.push

    wrapper.prop("onSubmit")();
    expect(props.actions.add).toHaveBeenCalled();
});

test("ItemsAdd error", () => {
    const props: any = {
        actions: {
            add: jest.fn(),
            initAdd: jest.fn(),
        },
        error: "error",
        history: [],
        isSubmitted: false,
    };

    const wrapper = shallow(<ItemsAdd {...props} />);

    expect(wrapper.prop("formError")).toBe(props.error);
});
