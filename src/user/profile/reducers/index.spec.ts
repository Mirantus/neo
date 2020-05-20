import { OK } from "../../../store/constants";
import { LOGIN } from "../../login/constants";
import { USER_EDIT } from "../../edit/constants";
import { REGISTER } from "../../register/constants";
import reducer, { initialState } from "./index";

test("Profile reducer", () => {
    // LOGIN_OK
    const loginOkAction = { type: LOGIN + OK, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, loginOkAction)).toBe(loginOkAction.payload);

    // USER_EDIT_OK
    const userEditOkAction = { type: USER_EDIT + OK, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, userEditOkAction)).toBe(userEditOkAction.payload);

    // REGISTER_OK
    const registerOkAction = { type: REGISTER + OK, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, registerOkAction)).toBe(registerOkAction.payload);

    // default
    const otherAction = { type: "test", payload: "payload2" };
    expect(reducer(initialState, otherAction)).toBe(initialState);
});
