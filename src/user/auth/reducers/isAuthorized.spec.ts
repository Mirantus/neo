import { ERROR, OK } from "../../../store/constants";
import { LOGIN } from "../../login/constants";
import { REGISTER } from "../../register/constants";
import { AUTH, LOGOUT } from "../constants";
import reducer, { initialState } from "./isAuthorized";

test("User auth reducer isAuthorized", () => {
    // LOGIN_OK
    const userLoginOkAction = { type: LOGIN + OK, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, userLoginOkAction)).toBe(true);

    // LOGOUT
    const logoutAction = { type: LOGOUT, payload: null };
    expect(reducer(initialState, logoutAction)).toBe(initialState);

    // REGISTER_OK
    const userRegisterOkAction = { type: REGISTER + OK, payload: { email: "e@mail.com" } };
    expect(reducer(initialState, userRegisterOkAction)).toBe(true);

    // AUTH
    const authAction = { type: AUTH, payload: null };
    expect(reducer(initialState, authAction)).toBe(initialState);

    // AUTH_OK
    const authOkAction = { type: AUTH + OK, payload: null };
    expect(reducer(initialState, authOkAction)).toBe(true);

    // AUTH_ERROR
    const authErrorAction = { type: AUTH + ERROR, payload: null };
    expect(reducer(initialState, authErrorAction)).toBe(false);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
