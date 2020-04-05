import { ITEMS_EDIT, ITEMS_EDIT_ERROR, ITEMS_EDIT_OK, ITEMS_EDIT_INIT } from "../../constants";
import reducer, { initialState } from "./isSubmitted";

test("Edit reducer isSubmitted", () => {
    // ITEMS_EDIT_INIT
    const editInitAction = { type: ITEMS_EDIT_INIT, payload: null };
    expect(reducer(initialState, editInitAction)).toBe(initialState);

    // ITEMS_EDIT
    const editAction = { type: ITEMS_EDIT, payload: null };
    expect(reducer(initialState, editAction)).toBe(initialState);

    // ITEMS_EDIT_OK
    const editOkAction = { type: ITEMS_EDIT_OK, payload: null };
    expect(reducer(initialState, editOkAction)).toBe(true);

    // ITEMS_EDIT_ERROR
    const editErrorAction = { type: ITEMS_EDIT_ERROR, payload: null };
    expect(reducer(initialState, editErrorAction)).toBe(true);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
