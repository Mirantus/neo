import React from "react";
import { shallow } from "enzyme";

import Content from "./content";

test("LoginContent", () => {
    const wrapper = shallow(<Content />);

    expect(wrapper.find("h1").text()).toBe("Вход");
    expect(wrapper.find("Link").text()).toBe("Регистрация");
});
