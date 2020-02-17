import React from "react";
import { shallow } from "enzyme";

import { Register } from "./index";
import Form from "./form";

test("Register Form", () => {
    const props: any = {
        error: null,
        history: [],
        isSubmitted: false,
        register: jest.fn(),
        initRegister: jest.fn(),
    };

    const wrapper = shallow(<Register {...props} />);

    expect(wrapper.type()).toEqual(Form);
    // TODO: expect(props.initRegister).toHaveBeenCalled();
    // TODO: !error && isSubmitted вызывает history.push

    wrapper.prop("onSubmit")();
    expect(props.register).toHaveBeenCalled();
});

test("Register error", () => {
    const props: any = {
        error: "error",
        history: [],
        isSubmitted: false,
        register: jest.fn(),
        initRegister: jest.fn(),
    };

    const wrapper = shallow(<Register {...props} />);

    expect(wrapper.prop("formError")).toBe(props.error);
});
