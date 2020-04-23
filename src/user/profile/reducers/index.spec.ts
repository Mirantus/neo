import { LOGIN_OK } from "../../login/constants";
import { USER_EDIT_OK } from "../../edit/constants";
import { REGISTER_OK } from "../../register/constants";
import reducer, { initialState } from "./index";

test("Profile reducer", () => {
    // LOGIN_OK
    const loginOkAction = { type: LOGIN_OK, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, loginOkAction)).toBe(loginOkAction.payload);

    // USER_EDIT_OK
    const userEditOkAction = { type: USER_EDIT_OK, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, userEditOkAction)).toBe(userEditOkAction.payload);

    // REGISTER_OK
    const registerOkAction = { type: REGISTER_OK, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, registerOkAction)).toBe(registerOkAction.payload);

    // default
    const otherAction = { type: "test", payload: "payload2" };
    expect(reducer(initialState, otherAction)).toBe(initialState);
});
