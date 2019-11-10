import React from "react";
import { shallow } from "enzyme";

import { ItemsList } from "./index";

const defaultProps: any = {
    data: [],
    error: null,
    isFetching: false,
    fetchItems: jest.fn(),
};

test("ItemsList Loader", () => {
    const props: any = {
        ...defaultProps,
        isFetching: true,
    };

    const wrapper = shallow(<ItemsList {...props} />);

    expect(wrapper.find("Loader")).toHaveLength(1);
    expect(wrapper.find("Error")).toHaveLength(0);
    expect(wrapper.find("ItemsListContent")).toHaveLength(0);
});

test("ItemsList Error", () => {
    const props: any = {
        ...defaultProps,
        error: { message: "message" },
    };

    const wrapper = shallow(<ItemsList {...props} />);

    expect(wrapper.find("Loading")).toHaveLength(0);
    expect(wrapper.find("ItemsListContent")).toHaveLength(0);
    expect(wrapper.find("Error").prop("message")).toBe(props.error.message);
});

test("ItemsList List", () => {
    const props: any = {
        ...defaultProps,
        data: {
            date: "2019-01-01",
            id: "id",
            text: "text",
        },
    };

    const wrapper = shallow(<ItemsList {...props} />);

    expect(wrapper.find("Loading")).toHaveLength(0);
    expect(wrapper.find("Error")).toHaveLength(0);
    expect(wrapper.find("ItemsListContent").prop("data")).toBe(props.data);
});

// TODO
// test("List fetch", () => {
// });
