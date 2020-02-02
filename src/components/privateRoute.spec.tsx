import React from "react";
import { shallow } from "enzyme";

import { PrivateRoute } from "./privateRoute";

test("PrivateRoute", () => {
    const props: any = {
        component: () => null,
        isAuthorized: true,
    };

    const wrapper = shallow(<PrivateRoute {...props} />);

    expect(wrapper.name()).toBe("Route");
});

test("PrivateRoute authorized", () => {
    const componentName = "MyComponent";
    const component = () => null;
    component.displayName = componentName;

    const props: any = {
        component,
        isAuthorized: true,
    };

    const wrapper = shallow(<PrivateRoute {...props} />);

    const $component = wrapper.prop("render")();

    expect($component.type.displayName).toBe(componentName);
});

test("PrivateRoute not authorized", () => {
    const props: any = {
        component: () => null,
        isAuthorized: false,
    };

    const wrapper = shallow(<PrivateRoute {...props} />);

    const $component = wrapper.prop("render")({ location: "" });
    expect($component.type.name).toBe("Redirect");
});
