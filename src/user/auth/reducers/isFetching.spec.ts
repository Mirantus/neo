import { AUTH, AUTH_ERROR, AUTH_OK, LOGOUT } from "../constants";
import reducer, { initialState } from "./isFetching";

test("User Auth reducer isFetching", () => {
    // LOGOUT
    const logoutAction = { type: LOGOUT, payload: null };
    expect(reducer(initialState, logoutAction)).toBe(false);

    // AUTH
    const authAction = { type: AUTH, payload: null };
    expect(reducer(initialState, authAction)).toBe(true);

    // AUTH_OK
    const authOkAction = { type: AUTH_OK, payload: null };
    expect(reducer(initialState, authOkAction)).toBe(false);

    // AUTH_ERROR
    const authErrorAction = { type: AUTH_ERROR, payload: null };
    expect(reducer(initialState, authErrorAction)).toBe(false);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
