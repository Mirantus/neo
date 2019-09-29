import React from "react";
import { shallow } from "enzyme";

import PageItemsAdd from "./add";

const props: any = {
    history: {},
};

test("PageItemsAdd", () => {
    const wrapper = shallow(<PageItemsAdd {...props} />);

    expect(wrapper.type()).toEqual("section");
    expect(wrapper.find("h1").text()).toBe("Добавление записи");
    expect(wrapper.find("Connect(Component)")).toHaveLength(1);
});
