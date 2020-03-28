import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_OK } from "../constants";
import reducer, { initialState } from "./isSubmitting";

test("Add reducer isSubmitted", () => {
    // ITEMS_ADD
    const addAction = { type: ITEMS_ADD, payload: null };
    expect(reducer(initialState, addAction)).toBe(true);

    // ITEMS_ADD_OK
    const addOkAction = { type: ITEMS_ADD_OK, payload: null };
    expect(reducer(initialState, addOkAction)).toBe(initialState);

    // ITEMS_ADD_ERROR
    const addErrorAction = { type: ITEMS_ADD_ERROR, payload: null };
    expect(reducer(initialState, addErrorAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
