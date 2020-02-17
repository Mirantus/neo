import React from "react";
import { shallow } from "enzyme";

import { Item } from "./index";

const defaultProps: any = {
    data: null,
    error: null,
    id: "id",
    isFetching: false,
    fetchItem: jest.fn(),
};

test("Item Loader", () => {
    const props: any = {
        ...defaultProps,
        isFetching: true,
    };

    const wrapper = shallow(<Item {...props} />);

    expect(wrapper.find("Loader")).toHaveLength(1);
    expect(wrapper.find("Error")).toHaveLength(0);
    expect(wrapper.find("ItemContent")).toHaveLength(0);
});

test("Item Error", () => {
    const props: any = {
        ...defaultProps,
        error: "message",
    };

    const wrapper = shallow(<Item {...props} />);

    expect(wrapper.find("Loading")).toHaveLength(0);
    expect(wrapper.find("ItemContent")).toHaveLength(0);
    expect(wrapper.find("Error").prop("message")).toBe(props.error);
});

test("Item Content", () => {
    const props: any = {
        ...defaultProps,
        data: {
            date: "2019-01-01",
            id: "id",
            text: "text",
        },
    };

    const wrapper = shallow(<Item {...props} />);

    expect(wrapper.find("Loading")).toHaveLength(0);
    expect(wrapper.find("Error")).toHaveLength(0);
    expect(wrapper.find("ItemContent").prop("data")).toBe(props.data);
});

test("Item no data", () => {
    const wrapper = shallow(<Item {...defaultProps} />);
    expect(wrapper.type()).toBe(null);
});

// TODO
// test("Item fetch", () => {
// });
