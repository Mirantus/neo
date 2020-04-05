import { ITEMS_EDIT_INIT, ITEMS_EDIT_INIT_OK } from "../../constants";
import reducer, { initialState } from "./data";

test("Edit init reducer data", () => {
    // ITEMS_EDIT_INIT
    const initAction = { type: ITEMS_EDIT_INIT, payload: null };
    expect(reducer(initialState, initAction)).toBe(initialState);

    // ITEMS_EDIT_INIT_OK
    const initOkAction = { type: ITEMS_EDIT_INIT_OK, payload: "payload" };
    expect(reducer(initialState, initOkAction)).toBe(initOkAction.payload);

    // default
    const otherAction = { type: "test", payload: "payload2" };
    expect(reducer(initialState, otherAction)).toBe(initialState);
});
