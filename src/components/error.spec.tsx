import React from "react";
import { shallow } from "enzyme";

import Error from "./error";

test("Error", () => {
    const props = {
        message: "message",
    };

    const wrapper = shallow(<Error {...props} />);

    expect(wrapper.html()).toContain(props.message);
});
