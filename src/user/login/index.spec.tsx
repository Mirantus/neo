import React from "react";
import { shallow } from "enzyme";

import { Login } from "./index";

test("Login Content", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find("LoginContent").length).toBe(1);
});
