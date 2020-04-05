import { ITEMS_EDIT, ITEMS_EDIT_ERROR } from "../../constants";
import reducer, { initialState } from "./error";

test("Edit reducer error", () => {
    // ITEMS_EDIT
    const editAction = { type: ITEMS_EDIT, payload: null };
    expect(reducer(initialState, editAction)).toBe(initialState);

    // ITEMS_EDIT_ERROR
    const editErrorPayload = { id: "test1" };
    const editErrorAction = { type: ITEMS_EDIT_ERROR, payload: editErrorPayload };
    expect(reducer(initialState, editErrorAction)).toEqual(editErrorPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
