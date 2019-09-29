import React from "react";
import { shallow } from "enzyme";

import Date from "./date";

test("ItemDate", () => {
    const props: any = {
        date: "2019-12-31",
    };

    const wrapper = shallow(<Date {...props} />);

    expect(wrapper.html()).toBe('<time dateTime="2019-12-31">31.12.2019</time>');
});
