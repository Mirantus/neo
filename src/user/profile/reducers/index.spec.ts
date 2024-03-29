import { submit } from "../../edit/slices/submit";
import { login } from "../../login/slices/submit";
import { register } from "../../register/slices/submit";

import reducer, { initialState } from "./index";

test("Profile reducer", () => {
    // LOGIN_OK
    const loginOkAction = { type: login.fulfilled.type, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, loginOkAction)).toBe(loginOkAction.payload);

    // USER_EDIT_OK
    const userEditOkAction = { type: submit.fulfilled.type, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, userEditOkAction)).toBe(userEditOkAction.payload);

    // REGISTER_OK
    const registerOkAction = { type: register.fulfilled.type, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, registerOkAction)).toBe(registerOkAction.payload);

    // default
    const otherAction = { type: "test", payload: "payload2" };
    expect(reducer(initialState, otherAction)).toBe(initialState);
});
