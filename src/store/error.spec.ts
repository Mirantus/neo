import { ERROR, INIT } from "./constants";
import createReducer, { initialState } from "./error";

test("Reducer error", () => {
    const ACTION_TYPE = "ACTION_TYPE";
    const reducer = createReducer(ACTION_TYPE);

    // ACTION
    const action = { type: ACTION_TYPE, payload: null };
    expect(reducer(initialState, action)).toBe(initialState);

    // ERROR
    const errorPayload = { id: "test1" };
    const errorAction = { type: ACTION_TYPE + ERROR, payload: errorPayload };
    expect(reducer(initialState, errorAction)).toEqual(errorPayload);

    // INIT
    const initAction = { type: ACTION_TYPE + INIT, payload: null };
    expect(reducer(initialState, initAction)).toBe(initialState);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
