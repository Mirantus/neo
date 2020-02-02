import React from "react";
import { shallow } from "enzyme";

import { Profile } from "./index";

test("Profile Content", () => {
    const wrapper = shallow(<Profile />);

    expect(wrapper.find("ProfileContent").length).toBe(1);
});
