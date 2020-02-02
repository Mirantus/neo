import React from "react";
import { shallow } from "enzyme";

import Content from "./content";

test("ProfileContent", () => {
    const wrapper = shallow(<Content />);

    expect(wrapper.find("h1").text()).toBe("Профиль");
});
