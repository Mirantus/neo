import { AUTH, AUTH_ERROR, LOGOUT } from "../constants";
import reducer, { initialState } from "./error";

test("User auth reducer error", () => {
    // LOGOUT
    const logoutAction = { type: LOGOUT, payload: null };
    expect(reducer(initialState, logoutAction)).toBe(initialState);

    // AUTH
    const authAction = { type: AUTH, payload: null };
    expect(reducer(initialState, authAction)).toBe(initialState);

    // AUTH_ERROR
    const errorAuthPayload = { id: "test1" };
    const errorAuthAction = { type: AUTH_ERROR, payload: errorAuthPayload };
    expect(reducer(initialState, errorAuthAction)).toEqual(errorAuthPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
