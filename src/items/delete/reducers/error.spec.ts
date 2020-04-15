import { ITEMS_DELETE, ITEMS_DELETE_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("Delete reducer error", () => {
    // ITEMS_DELETE
    const deleteAction = { type: ITEMS_DELETE, payload: null };
    expect(reducer(initialState, deleteAction)).toBe(initialState);

    // ITEMS_DELETE_ERROR
    const errorDeletePayload = { id: "test1" };
    const errorDeleteAction = { type: ITEMS_DELETE_ERROR, payload: errorDeletePayload };
    expect(reducer(initialState, errorDeleteAction)).toEqual(errorDeletePayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
