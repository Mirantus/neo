import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_INIT, ITEMS_ADD_OK } from "../constants";
import reducer, { initialState } from "./isSubmitted";

test("Add reducer isSubmitted", () => {
    // ITEMS_ADD_INIT
    const addInitAction = { type: ITEMS_ADD_INIT, payload: null };
    expect(reducer(initialState, addInitAction)).toBe(initialState);

    // ITEMS_ADD
    const addAction = { type: ITEMS_ADD, payload: null };
    expect(reducer(initialState, addAction)).toBe(initialState);

    // ITEMS_ADD_OK
    const addOkAction = { type: ITEMS_ADD_OK, payload: null };
    expect(reducer(initialState, addOkAction)).toBe(true);

    // ITEMS_ADD_ERROR
    const addErrorAction = { type: ITEMS_ADD_ERROR, payload: null };
    expect(reducer(initialState, addErrorAction)).toBe(true);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
