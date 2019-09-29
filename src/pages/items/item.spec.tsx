import React from "react";
import { shallow } from "enzyme";

import PageItemsItem from "./item";

const props: any = {
    match: {
        params: {
            id: "id",
        },
    },
};

test("PageItemsItem", () => {
    const wrapper = shallow(<PageItemsItem {...props} />);

    expect(wrapper.type()).toEqual("section");
    expect(wrapper.find("Connect(Component)").prop("id")).toBe(props.match.params.id);
});
