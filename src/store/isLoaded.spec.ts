import { ERROR, INIT, OK } from "./constants";
import createReducer, { initialState } from "./isLoaded";

test("Reducer isLoaded", () => {
    const ACTION_TYPE = "ACTION_TYPE";
    const reducer = createReducer(ACTION_TYPE);

    // ACTION
    const action = { type: ACTION_TYPE, payload: null };
    expect(reducer(initialState, action)).toBe(initialState);

    // ERROR
    const errorAction = { type: ACTION_TYPE + ERROR, payload: null };
    expect(reducer(initialState, errorAction)).toBe(true);

    // INIT
    const initAction = { type: ACTION_TYPE + INIT, payload: null };
    expect(reducer(initialState, initAction)).toBe(initialState);

    // OK
    const okAction = { type: ACTION_TYPE + OK, payload: null };
    expect(reducer(initialState, okAction)).toBe(true);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
