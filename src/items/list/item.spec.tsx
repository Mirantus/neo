import React from "react";
import { shallow } from "enzyme";

import { Item } from "./item";

test("ListItem", () => {
    const props: any = {
        data: {
            id: "1",
            text: "text",
            date: "2019-01-01",
        },
        history: {
            push: jest.fn(),
        },
    };

    const wrapper = shallow(<Item {...props} />);

    expect(wrapper.text()).toContain(props.data.text);
    expect(wrapper.find("ItemDate").prop("date")).toBe(props.data.date);

    wrapper.prop("onClick")();
    expect(props.history.push).toHaveBeenCalledWith("/items/" + props.data.id);
});
