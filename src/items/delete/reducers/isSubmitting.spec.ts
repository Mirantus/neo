import { ITEMS_DELETE, ITEMS_DELETE_ERROR, ITEMS_DELETE_OK } from "../constants";
import reducer, { initialState } from "./isSubmitting";

test("Delete reducer isSubmitted", () => {
    // ITEMS_DELETE
    const deleteAction = { type: ITEMS_DELETE, payload: null };
    expect(reducer(initialState, deleteAction)).toBe(true);

    // ITEMS_DELETE_OK
    const deleteOkAction = { type: ITEMS_DELETE_OK, payload: null };
    expect(reducer(initialState, deleteOkAction)).toBe(initialState);

    // ITEMS_DELETE_ERROR
    const deleteErrorAction = { type: ITEMS_DELETE_ERROR, payload: null };
    expect(reducer(initialState, deleteErrorAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
