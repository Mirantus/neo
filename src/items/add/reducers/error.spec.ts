import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_INIT } from "../constants";
import reducer, { initialState } from "./error";

test("Add reducer error", () => {
    // ITEMS_ADD
    const addAction = { type: ITEMS_ADD, payload: null };
    expect(reducer(initialState, addAction)).toBe(initialState);

    // ITEMS_ADD_ERROR
    const errorAddPayload = { id: "test1" };
    const errorAddAction = { type: ITEMS_ADD_ERROR, payload: errorAddPayload };
    expect(reducer(initialState, errorAddAction)).toEqual(errorAddPayload);

    // ITEMS_ADD_INIT
    const initAction = { type: ITEMS_ADD_INIT, payload: null };
    expect(reducer(initialState, initAction)).toBe(initialState);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
