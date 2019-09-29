import React from "react";
import { shallow } from "enzyme";

import List from "./list";

test("ItemsListContent", () => {
    // TODO: Item Mock в одном месте
    const props: any = {
        data: [
            {
                id: "1",
                text: "text",
                date: "2019-01-01",
            },
        ],
    };

    const wrapper = shallow(<List {...props} />);

    expect(wrapper.find("withRouter()").prop("data")).toBe(props.data[0]);
});
