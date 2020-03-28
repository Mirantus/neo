import { LOGIN, LOGIN_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("Login reducer error", () => {
    // LOGIN
    const loginAction = { type: LOGIN, payload: null };
    expect(reducer(initialState, loginAction)).toBe(initialState);

    // LOGIN_ERROR
    const errorLoginPayload = "test1";
    const errorLoginAction = { type: LOGIN_ERROR, payload: errorLoginPayload };
    expect(reducer(initialState, errorLoginAction)).toEqual(errorLoginPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
