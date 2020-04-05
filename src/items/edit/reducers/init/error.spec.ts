import { ITEMS_EDIT_INIT, ITEMS_EDIT_INIT_ERROR } from "../../constants";
import reducer, { initialState } from "./error";

test("Edit init reducer error", () => {
    // ITEMS_EDIT_INIT
    const initAction = { type: ITEMS_EDIT_INIT, payload: null };
    expect(reducer(initialState, initAction)).toBe(initialState);

    // ITEMS_EDIT_INIT_ERROR
    const initErrorPayload = { id: "test1" };
    const initErrorAction = { type: ITEMS_EDIT_INIT_ERROR, payload: initErrorPayload };
    expect(reducer(initialState, initErrorAction)).toEqual(initErrorPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
