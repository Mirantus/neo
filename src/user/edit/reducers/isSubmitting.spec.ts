import { USER_EDIT, USER_EDIT_ERROR, USER_EDIT_OK } from "../constants";
import reducer, { initialState } from "./isSubmitting";

test("User edit reducer isSubmitting", () => {
    // USER_EDIT
    const userEditAction = { type: USER_EDIT, payload: null };
    expect(reducer(initialState, userEditAction)).toBe(true);

    // USER_EDIT_OK
    const userEditOkAction = { type: USER_EDIT_OK, payload: null };
    expect(reducer(initialState, userEditOkAction)).toBe(initialState);

    // USER_EDIT_ERROR
    const userEditErrorAction = { type: USER_EDIT_ERROR, payload: null };
    expect(reducer(initialState, userEditErrorAction)).toBe(initialState);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
