import { USER_AUTH, USER_AUTH_OK, USER_AUTH_ERROR } from "../constants";
import reducer, { initialState } from "./isAuthorized";

test("User auth reducer isAuthorized", () => {
    //USER_AUTH
    const userAuthAction = { type: USER_AUTH, payload: null };
    expect(reducer(initialState, userAuthAction)).toBe(initialState);

    //USER_AUTH_OK
    const userAuthOkAction = { type: USER_AUTH_OK, payload: null };
    expect(reducer(initialState, userAuthOkAction)).toBe(true);

    //USER_AUTH_ERROR
    const userAuthErrorAction = { type: USER_AUTH_ERROR, payload: null };
    expect(reducer(initialState, userAuthErrorAction)).toBe(false);

    //default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
