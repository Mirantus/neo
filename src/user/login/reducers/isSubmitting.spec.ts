import { LOGIN, LOGIN_ERROR, LOGIN_OK } from "../constants";
import reducer, { initialState } from "./isSubmitting";

test("Login reducer isSubmitting", () => {
    // LOGIN
    const loginAction = { type: LOGIN, payload: null };
    expect(reducer(initialState, loginAction)).toBe(true);

    // LOGIN_OK
    const loginOkAction = { type: LOGIN_OK, payload: null };
    expect(reducer(initialState, loginOkAction)).toBe(initialState);

    // LOGIN_ERROR
    const loginErrorAction = { type: LOGIN_ERROR, payload: null };
    expect(reducer(initialState, loginErrorAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
