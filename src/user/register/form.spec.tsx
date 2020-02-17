import React from "react";
import { shallow } from "enzyme";

import { RegisterForm, validate } from "./form";

test("RegisterForm", () => {
    const props: any = {
        formError: null,
        handleSubmit: jest.fn(),
    };

    const wrapper = shallow(<RegisterForm {...props} />);

    expect(wrapper.find("h1").text()).toBe("Регистрация");
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("Error")).toHaveLength(0);
});

test("RegisterForm error", () => {
    const props: any = {
        formError: "error",
        handleSubmit: () => {},
    };

    const wrapper = shallow(<RegisterForm {...props} />);
    const errorWrapper = wrapper.find("Error");

    expect(errorWrapper).toHaveLength(1);
    expect(errorWrapper.prop("message")).toBe(props.formError);
});

test("RegisterForm validate", () => {
    const values = { email: "e@mail.com", password: "1", password2: "1" };
    expect(validate(values)).toEqual({});
});

test("RegisterForm validate error", () => {
    const values = { email: "", password: "1", password2: "2" };
    expect(validate(values)).toEqual({ password2: "Пароли должны совпадать" });
});
