import React from "react";
import { shallow } from "enzyme";

import PageHome from "./home";

test("PageHome", () => {
    const wrapper = shallow(<PageHome />);

    expect(wrapper.type()).toEqual("section");
    expect(wrapper.find("h1").text()).toBe("Записи");
    expect(wrapper.find("Connect(Component)")).toHaveLength(1);
});
