import { ITEMS_EDIT, ITEMS_EDIT_ERROR, ITEMS_EDIT_OK } from "../../constants";
import reducer, { initialState } from "./isSubmitting";

test("Edit reducer isSubmitting", () => {
    // ITEMS_EDIT
    const editAction = { type: ITEMS_EDIT, payload: null };
    expect(reducer(initialState, editAction)).toBe(true);

    // ITEMS_EDIT_OK
    const editOkAction = { type: ITEMS_EDIT_OK, payload: null };
    expect(reducer(initialState, editOkAction)).toBe(initialState);

    // ITEMS_EDIT_ERROR
    const editErrorAction = { type: ITEMS_EDIT_ERROR, payload: null };
    expect(reducer(initialState, editErrorAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
