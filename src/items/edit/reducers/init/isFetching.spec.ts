import { ITEMS_EDIT_INIT, ITEMS_EDIT_INIT_ERROR, ITEMS_EDIT_INIT_OK } from "../../constants";
import reducer, { initialState } from "./isFetching";

test("Edit init reducer isFetching", () => {
    // ITEMS_EDIT_INIT
    const initAction = { type: ITEMS_EDIT_INIT, payload: null };
    expect(reducer(initialState, initAction)).toBe(true);

    // ITEMS_EDIT_INIT_ERROR
    const initErrorAction = { type: ITEMS_EDIT_INIT_ERROR, payload: true };
    expect(reducer(initialState, initErrorAction)).toBe(false);

    // ITEMS_EDIT_INIT_OK
    const initOkAction = { type: ITEMS_EDIT_INIT_OK, payload: true };
    expect(reducer(initialState, initOkAction)).toBe(false);

    // default
    const otherAction = { type: "test2", payload: true };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
