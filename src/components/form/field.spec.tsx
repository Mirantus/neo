import React from "react";
import { shallow } from "enzyme";

import Field from "./field";

test("Field", () => {
    const props = {
        label: "label",
        children: "text",
    };

    const wrapper = shallow(<Field {...props} />);

    expect(wrapper.html()).toContain(props.label);
});
