import React from "react";
import { shallow } from "enzyme";

import Content from "./content";

test("ItemContent", () => {
    const props: any = {
        data: {
            text: "text",
            date: "2019-01-01",
        },
    };

    const wrapper = shallow(<Content {...props} />);

    expect(wrapper.find("h1").text()).toBe("Запись");
    expect(wrapper.text()).toContain(props.data.text);
    expect(wrapper.find("ItemDate").prop("date")).toBe(props.data.date);
});
