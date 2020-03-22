import { LOGIN_INIT, LOGIN, LOGIN_OK, LOGIN_ERROR } from "../constants";
import reducer, { initialState } from "./isSubmitted";

test("Login reducer isSubmitted", () => {
    //LOGIN_INIT
    const loginInitAction = { type: LOGIN_INIT, payload: null };
    expect(reducer(initialState, loginInitAction)).toBe(initialState);

    //LOGIN
    const loginAction = { type: LOGIN, payload: null };
    expect(reducer(initialState, loginAction)).toBe(initialState);

    //LOGIN_OK
    const loginOkAction = { type: LOGIN_OK, payload: null };
    expect(reducer(initialState, loginOkAction)).toBe(true);

    //LOGIN_ERROR
    const loginErrorAction = { type: LOGIN_ERROR, payload: null };
    expect(reducer(initialState, loginErrorAction)).toBe(true);

    //default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
