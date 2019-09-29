import React from "react";
import { shallow } from "enzyme";

import Loader from "./loader";

test("Loader", () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.html()).toContain("Подождите");
});
