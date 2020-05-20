import { ERROR, OK } from "./constants";
import createReducer, { initialState } from "./isLoading";

test("Reducer isLoading", () => {
    const ACTION_TYPE = "ACTION_TYPE";
    const reducer = createReducer(ACTION_TYPE);

    // ACTION
    const action = { type: ACTION_TYPE, payload: null };
    expect(reducer(initialState, action)).toBe(true);

    // ERROR
    const errorAction = { type: ACTION_TYPE + ERROR, payload: null };
    expect(reducer(initialState, errorAction)).toBe(initialState);

    // OK
    const okAction = { type: ACTION_TYPE + OK, payload: null };
    expect(reducer(initialState, okAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
