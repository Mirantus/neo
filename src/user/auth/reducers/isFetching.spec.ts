import { USER_AUTH, USER_AUTH_ERROR, USER_AUTH_OK } from "../constants";
import reducer, { initialState } from "./isFetching";

test("User Auth reducer isSubmitted", () => {
    //USER_AUTH
    const userAuthAction = { type: USER_AUTH, payload: null };
    expect(reducer(initialState, userAuthAction)).toBe(true);

    //USER_AUTH_OK
    const userAuthOkAction = { type: USER_AUTH_OK, payload: null };
    expect(reducer(initialState, userAuthOkAction)).toBe(initialState);

    //USER_AUTH_ERROR
    const userAuthErrorAction = { type: USER_AUTH_ERROR, payload: null };
    expect(reducer(initialState, userAuthErrorAction)).toBe(initialState);

    //default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
